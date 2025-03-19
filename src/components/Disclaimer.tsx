
import React from 'react';

const Disclaimer = () => {
  return (
    <section id="disclaimer" className="py-12 relative">
      <div className="container mx-auto px-6">
        <div className="glass-card p-8 rounded-xl">
          <h3 className="text-xl font-semibold text-white mb-4">Legal Disclaimer</h3>
          
          <div className="text-gray-400 text-sm space-y-4 max-w-4xl">
            <p>
              The Predictive Credit Score Checker provides estimates and predictions based on publicly available data and statistical models. These predictions are not guaranteed to be accurate and should not be relied upon for making financial or credit decisions.
            </p>
            <p>
              The tool does not access personal credit information or credit history and is not a substitute for official credit reports or scores from authorized credit reporting agencies. The predicted credit scores are purely educational and informational in nature.
            </p>
            <p>
              Predictions are based on multiple factors including but not limited to location demographics, economic indicators, property values, and regional credit patterns. Individual credit scores are influenced by numerous personal factors that this tool cannot account for.
            </p>
            <p>
              AI WEB TOOLS LLC makes no warranties, express or implied, regarding the accuracy, reliability, or completeness of any predictions or information provided by the Predictive Credit Score Checker. By using this tool, you acknowledge and accept these limitations.
            </p>
            <p>
              This tool is powered by GPT-4o technology and may contain errors or inaccuracies. Always consult with qualified financial professionals before making any credit-related decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Disclaimer;
