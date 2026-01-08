import { ReactNode, useState } from "react";
import "./Foldout.css";

type FoldoutExpandToggleCallback = (expanded: boolean) => void;

interface FoldoutProps {
    caption: string;
    children: ReactNode;

    expanded?: boolean;
    expandToggleCallback?: FoldoutExpandToggleCallback;
    classes?: string;
}

const Foldout = ({ caption, expanded = false, expandToggleCallback, classes, children }: FoldoutProps) => {
    const [isExpanded, setExpanded] = useState(expanded);

    function toggleExpandFoldout() {
        if (expandToggleCallback)
            expandToggleCallback(!isExpanded);
        setExpanded(!isExpanded);
    }

    return (
        <div className={`foldout${isExpanded ? "" : " collapsed"}${classes ? ` ${classes.trim()}` : ""}`}>
            <div className="foldout-header">
                <div className="foldout-caption">
                    <span>{caption}</span>
                </div>
                <div className="foldout-toggle">
                    <span onClick={toggleExpandFoldout}>{isExpanded ? "Collapse" : "Expand"}</span>
                </div>
            </div>

            <div className="foldout-content-container">
                <div className="foldout-content">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Foldout;