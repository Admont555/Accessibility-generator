
import { useState } from "react";
import AccessibilityStatement from "@/components/AccessibilityStatement";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="max-w-4xl mx-auto p-6 space-y-8 direction-rtl" dir="rtl">
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">הגדרות הצהרת נגישות</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="siteName">שם האתר</Label>
              <Input
                id="siteName"
                name="siteName"
                value={formData.siteName}
                onChange={handleInputChange}
                className="text-right"
                placeholder="הכנס את שם האתר"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="pluginName">שם התוסף</Label>
              <Input
                id="pluginName"
                name="pluginName"
                value={formData.pluginName}
                onChange={handleInputChange}
                className="text-right"
                placeholder="הכנס את שם התוסף"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">כתובת אימייל</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                className="text-right"
                placeholder="הכנס כתובת אימייל"
                dir="ltr"
              />
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
