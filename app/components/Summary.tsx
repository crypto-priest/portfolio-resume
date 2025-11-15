import { resumeData } from "../data/resume-data";

export default function Summary() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-10 section-header">
        <span className="text-[var(--accent)]">fn</span> about()
      </h2>
      <p className="text-[var(--text)] leading-relaxed text-lg">
        {resumeData.summary}
      </p>
    </div>
  );
}
