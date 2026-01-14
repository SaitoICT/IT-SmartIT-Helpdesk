
import React, { useState } from 'react';
import { IT_TREE } from './constants';
import { FAQNode } from './types';
import { ChatInterface } from './components/ChatInterface';

const App: React.FC = () => {
  const [history, setHistory] = useState<FAQNode[][]>([]);
  const [currentNode, setCurrentNode] = useState<FAQNode | null>(null);
  const [showAI, setShowAI] = useState(false);

  const selectCategory = (node: FAQNode) => {
    if (currentNode) {
      setHistory(prev => [...prev, [currentNode]]);
    }
    setCurrentNode(node);
    setShowAI(false);
  };

  const goBack = () => {
    if (currentNode === null) return;
    setCurrentNode(null);
    setShowAI(false);
  };

  const renderHome = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
      {IT_TREE.map(node => (
        <button
          key={node.id}
          onClick={() => selectCategory(node)}
          className="flex items-start p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-blue-400 hover:shadow-md transition-all group text-left"
        >
          <span className="text-4xl mr-4 group-hover:scale-110 transition-transform">{node.icon}</span>
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-1">{node.title}</h3>
            <p className="text-gray-500 text-sm">{node.description}</p>
          </div>
        </button>
      ))}
      <button
        onClick={() => setShowAI(true)}
        className="flex items-center justify-center p-6 bg-blue-50 border-2 border-dashed border-blue-200 rounded-2xl text-blue-600 font-bold hover:bg-blue-100 transition-colors"
      >
        ✨ 項目にない質問（AIに聞く）
      </button>
    </div>
  );

  const renderSteps = (node: FAQNode) => (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 animate-fadeIn">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
        <span className="mr-3">{node.icon || '📌'}</span> {node.title}
      </h2>
      
      {node.options ? (
        <div className="space-y-3">
          <p className="text-gray-500 mb-4">具体的にどのような問題ですか？</p>
          {node.options.map(opt => (
            <button
              key={opt.id}
              onClick={() => selectCategory(opt)}
              className="w-full p-4 text-left border rounded-xl hover:bg-gray-50 hover:border-blue-300 transition-colors flex justify-between items-center"
            >
              <span className="font-medium text-gray-700">{opt.title}</span>
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          ))}
        </div>
      ) : (
        <div className="space-y-6">
          <div className="bg-blue-50 p-6 rounded-xl">
            <h4 className="font-bold text-blue-800 mb-4">解決のための手順:</h4>
            <ol className="list-decimal list-inside space-y-3">
              {node.steps?.map((step, idx) => (
                <li key={idx} className="text-gray-700 leading-relaxed">{step}</li>
              ))}
            </ol>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <button 
              onClick={() => setCurrentNode(null)}
              className="flex-1 bg-green-600 text-white py-3 rounded-xl font-bold hover:bg-green-700 transition-colors shadow-lg shadow-green-100"
            >
              解決した！ありがとう
            </button>
            <button 
              onClick={() => setShowAI(true)}
              className="flex-1 bg-gray-100 text-gray-600 py-3 rounded-xl font-bold hover:bg-gray-200 transition-colors"
            >
              解決しない（AIに相談）
            </button>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">IT</div>
            <h1 className="text-lg font-bold tracking-tight">Smart IT Helpdesk</h1>
          </div>
          <div className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Internal Use Only</div>
        </div>
      </header>

      {/* Hero Section */}
      {!currentNode && !showAI && (
        <section className="bg-white border-b border-gray-200 py-12 px-4 mb-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">何かお困りですか？</h2>
            <p className="text-gray-500 text-lg">
              IT担当者にチャットを送る前に、まずは以下のセルフチェックをお試しください。<br/>
              <span className="text-sm font-medium text-blue-600">80%以上の問題はここで解決できます。</span>
            </p>
          </div>
        </section>
      )}

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 mt-8">
        {/* Navigation / Breadcrumbs */}
        {(currentNode || showAI) && (
          <button 
            onClick={goBack}
            className="flex items-center text-blue-600 mb-6 font-medium hover:underline group"
          >
            <svg className="w-5 h-5 mr-1 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            戻る
          </button>
        )}

        {showAI ? (
          <div className="animate-slideUp">
            <ChatInterface />
          </div>
        ) : currentNode ? (
          renderSteps(currentNode)
        ) : (
          renderHome()
        )}
      </main>

      {/* Footer Info */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-gray-200 py-3">
        <div className="max-w-4xl mx-auto px-4 flex justify-between items-center text-[10px] text-gray-400 font-medium">
          <span>&copy; 2025 Corporate IT Department</span>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-500">セキュリティポリシー</a>
            <a href="#" className="hover:text-blue-500">緊急時の連絡先</a>
          </div>
        </div>
      </footer>

      {/* Tailwind Utility styles (Animations) */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.4s ease-out forwards; }
        .animate-slideUp { animation: slideUp 0.5s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default App;
