export default function ToolsContent() {
  return (
    <div className="tools-content">
      <h2 className="tools-title">Free Performance Analysis Tools</h2>
      <p className="tools-description">
        Get instant insights into your WordPress site&rsquo;s performance with our specialized
        tools. Identify bottlenecks and get actionable recommendations.
      </p>

      <ul className="tool-features">
        <li>
          <strong>Instant Speed Test:</strong> Get your PageSpeed score in seconds with detailed
          breakdown
        </li>
        <li>
          <strong>Core Web Vitals Check:</strong> Analyze LCP, FID, and CLS performance
        </li>
        <li>
          <strong>Plugin Impact Analysis:</strong> See which plugins are slowing you down
        </li>
        <li>
          <strong>Optimization Roadmap:</strong> Step-by-step improvement plan
        </li>
      </ul>

      <div className="flex gap-4 flex-wrap">
        <button className="cta-button">View All Tools</button>
        <button className="cta-button outline">Download Checklist</button>
      </div>
    </div>
  );
}