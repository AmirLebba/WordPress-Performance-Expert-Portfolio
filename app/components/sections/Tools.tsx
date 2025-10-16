import ToolsContent from '@/components/ui/ToolsContent';
import SpeedTestWidget from '@/components/ui/SpeedTestWidget';

export default function Tools() {
  return (
    <section id="tools" className="tools">
      <div className="container">
        <div className="tools-grid">
          <ToolsContent />
          <SpeedTestWidget />
        </div>
      </div>
    </section>
  );
}