import { resumeData } from "../data/resume-data";

export default function Achievements() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-10 section-header">
        <span className="text-[var(--accent)]">const</span> ACHIEVEMENTS
      </h2>

      <ul className="space-y-3">
        {resumeData.achievements.map((achievement, idx) => (
          <li key={idx} className="leading-relaxed flex items-start text-[var(--text)] text-base hover:scale-[1.01] transition-transform">
            <span className="text-[var(--accent)] mr-3 mt-1.5 text-sm flex-shrink-0">★</span>
            <span>{achievement}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
