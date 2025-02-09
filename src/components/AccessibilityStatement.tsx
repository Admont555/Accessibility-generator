
import { format } from "date-fns";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface AccessibilityStatementProps {
  siteName: string;
  pluginName: string;
  email: string;
}

const AccessibilityStatement = ({ siteName, pluginName, email }: AccessibilityStatementProps) => {
  const currentDate = format(new Date(), "dd/MM/yyyy");
  const { toast } = useToast();

  const copyToClipboard = async () => {
    try {
      const statementDiv = document.getElementById('accessibility-statement-content');
      if (!statementDiv) {
        throw new Error('Content element not found');
      }
      
      const textToCopy = Array.from(statementDiv.childNodes)
        .map(node => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            return (node as HTMLElement).innerText;
          }
          return node.textContent;
        })
        .join('\n')
        .trim();
      
      await navigator.clipboard.writeText(textToCopy);
      
      toast({
        title: "הועתק בהצלחה",
        description: "הצהרת הנגישות הועתקה ללוח",
      });
    } catch (err) {
      console.error('Copy failed:', err);
      toast({
        title: "שגיאה בהעתקה",
        description: "לא ניתן להעתיק את הטקסט",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="relative mb-12">
      <div className="sticky top-4 z-10 flex justify-end mb-4">
        <Button
          onClick={copyToClipboard}
          className="gap-2"
          variant="outline"
        >
          <Copy className="h-4 w-4" />
          העתק הצהרה
        </Button>
      </div>

      <div id="accessibility-statement" className="max-w-4xl mx-auto p-6 space-y-8 animate-fadeIn direction-rtl" dir="rtl">
        <div id="accessibility-statement-content">
          <h1 className="text-3xl font-bold mb-8 text-gray-900">הצהרת נגישות</h1>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            באתר {siteName} נעשו מאמצים להנגיש את תכני האתר לכלל האוכלוסייה.
          </p>

          <section className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">מהו אתר נגיש?</h2>
            <p className="text-gray-700 leading-relaxed">
              אתר שמוגדר "אתר נגיש" אמור לספק חווית גלישה נעימה ונוחה לכולם. מדובר על אתר ידידותי, זמין 24 שעות ביממה לשימוש עבור אנשים עם מוגבלויות, לקויות ואנשים המתקשים בהפעלת המחשב והאינטרנט.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">שימוש בתפריט הנגישות</h2>
            <p className="text-gray-700">
              אנחנו משתמשים בתוסף וורדפרס הנקרא "{pluginName}" אשר מסייע בהנגשת האתר עבור כל מי שצריך ורוצה. תוסף הנגישות מתעדכן על בסיס קבוע.
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">מה ניתן לשנות באתר באמצעות השימוש בתוסף?</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>הגדלה של הטקסט בהתאם למסך</li>
                <li>שינוי הטקסט לגוון אפור</li>
                <li>ניגודיות גבוהה</li>
                <li>ניגודיות הפוכה</li>
                <li>שינוי לרקע בהיר</li>
                <li>הדגשה של קישורים</li>
                <li>הפיכה לפונט קריא</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">קיצורי מקלדת</h3>
              <ul className="space-y-2 text-blue-800">
                <li>• ניווט באמצעות מקש TAB</li>
                <li>• הגדלת גודל פונט: CTRL +</li>
                <li>• הקטנת גודל פונט: CTRL –</li>
              </ul>
            </div>
          </section>

          <section className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">נתקלתם בבעיה? ספרו לנו!</h2>
            <p className="text-gray-700 leading-relaxed">
              אנו עושים את מירב המאמצים להציג אתר נגיש שנדרש על פי חוק. במידה ומצאתם קשיים בגלישה באתר, אנא צרו קשר בכתובת: {" "}
              <a 
                href={`mailto:${email}`} 
                className="text-blue-600 hover:text-blue-700 transition-colors underline"
              >
                {email}
              </a>
            </p>
          </section>

          <footer className="mt-12 pt-6 border-t border-gray-200">
            <p className="text-gray-600 text-sm">
              תאריך עדכון ההצהרה: {currentDate}
            </p>
            <p className="text-gray-500 text-sm mt-4">
              הצהרה זו נכתבה על פי המידע הידוע והקיים בזמן כתיבתה. יתכנו שינויים במבנה האתר ו/או בתכניו אשר ישפיעו על נגישותו. אין לראות בהצהרה זו אחריות משפטית או התחייבות כלשהי מעבר לדרישות החוק.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default AccessibilityStatement;
