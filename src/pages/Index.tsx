
import { useState } from "react";
import AccessibilityStatement from "@/components/AccessibilityStatement";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const [formData, setFormData] = useState({
    siteName: "אתר לדוגמה",
    pluginName: "תוסף נגישות",
    email: "example@domain.com",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <div className="min-h-screen bg-[#F8FBFF] font-heebo py-12">
      <div className="max-w-4xl mx-auto p-4 md:p-6 space-y-8 direction-rtl" dir="rtl">
        <div className="flex items-center justify-between mb-8">
          <Button 
            variant="ghost" 
            onClick={() => window.location.href = 'https://www.beeu.co.il'}
            className="flex items-center gap-2 text-custom-darkGray hover:text-custom-yellow transition-colors"
          >
            חזרה לאתר
            <ArrowRight className="h-4 w-4" />
          </Button>
          <img 
            src="https://beeu.co.il/wp-content/uploads/2024/03/אייקון-ביו-מקורי-1.svg" 
            alt="BeeU Logo" 
            className="h-12 w-auto"
          />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg mb-8 transition-all hover:shadow-xl">
          <h2 className="text-2xl font-semibold mb-6 text-custom-darkGray">הגדרות הצהרת נגישות</h2>
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="siteName" className="text-custom-darkGray">שם האתר</Label>
              <Input
                id="siteName"
                name="siteName"
                value={formData.siteName}
                onChange={handleInputChange}
                className="text-right border-custom-yellow focus:border-custom-yellow"
                placeholder="הכנס את שם האתר"
                aria-label="שם האתר"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="pluginName" className="text-custom-darkGray">שם התוסף</Label>
              <Input
                id="pluginName"
                name="pluginName"
                value={formData.pluginName}
                onChange={handleInputChange}
                className="text-right border-custom-yellow focus:border-custom-yellow"
                placeholder="הכנס את שם התוסף"
                aria-label="שם התוסף"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-custom-darkGray">כתובת אימייל</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`text-right border-custom-yellow focus:border-custom-yellow ${
                  !validateEmail(formData.email) && formData.email ? 'border-red-500' : ''
                }`}
                placeholder="הכנס כתובת אימייל"
                dir="ltr"
                aria-label="כתובת אימייל"
              />
              {!validateEmail(formData.email) && formData.email && (
                <p className="text-red-500 text-sm mt-1">כתובת אימייל לא תקינה</p>
              )}
            </div>
          </div>
        </div>

        <AccessibilityStatement 
          siteName={formData.siteName}
          pluginName={formData.pluginName}
          email={formData.email}
        />
      </div>
    </div>
  );
};

export default Index;
