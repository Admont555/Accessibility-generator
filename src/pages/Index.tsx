
import AccessibilityStatement from "@/components/AccessibilityStatement";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <AccessibilityStatement 
        siteName="אתר לדוגמה"
        pluginName="תוסף נגישות"
        email="example@domain.com"
      />
    </div>
  );
};

export default Index;
