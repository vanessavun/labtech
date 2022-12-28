import React, { useContext } from "react";
import DataCard from "../data-card/data-card.component";
import { KanbanContext } from "../../context/KanbanContext";
import "./kanban-columns.styles.css";

function KanbanColumns() {
  const { batches } = useContext(KanbanContext);

  const testColumn = (testType) => {
    return batches.filter((batch) => batch.test === testType);
  };

  const testColumns = [
    { title: "Extraction", batch: testColumn("extraction") },
    { title: "Library Prep", batch: testColumn("libraryPrep") },
    { title: "LP Cleanup", batch: testColumn("lpCleanup") },
    { title: "Enrichment", batch: testColumn("enrichment") },
    { title: "Quantitation", batch: testColumn("quantitation") },
    { title: "Sequencing", batch: testColumn("sequencing") },
  ];

  return (
    <div className="container-fluid text-center p-2">
      <div className="kanban-row row row-cols-2 g-1 p-1">
        {testColumns.map((column) => (
          <div className="kanban-column col-md-3 bg-light px-1 mx-1">
            <h5>{column.title}</h5>
            {/* DataCard to display INDIVIDUAL BATCH object */}
            <DataCard batch={column.batch} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default KanbanColumns;
