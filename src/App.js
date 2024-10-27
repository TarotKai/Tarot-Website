import React, { useState } from 'react';
import './index.css';

import { fetchTarotResult } from './api/apiService';
import FormComponent from './ui/FormComponent';
import ResponseDisplay from './ui/ResponseDisplay';

const FeedbackForm = () => {
  const [apiResponse, setApiResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(true);  // 控制表单显示

  const handleSubmit = async (message, needDetail, needCard, cardName) => {
    setLoading(true);
    setError(null);
    setApiResponse(null);
    setShowForm(false); // 隐藏表单并显示结果

    try {
      const result = await fetchTarotResult(message, needDetail, needCard, cardName);
      setApiResponse(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="bg-slate-800 p-4 shadow-lg-mb-6">
        <div className="container mx-auto flex items-center">
          <div className="text-white text-xl font-bold">塔塔开门</div>
          <div className="ml-8 space-x-4">
            <button className="text-white px-4 py-2 rounded hover:bg-slate-700">首页</button>
            <button className="text-white px-4 py-2 rounded hover:bg-slate-700">AI 塔罗占卜</button>
            <button className="text-white px-4 py-2 rounded hover:bg-slate-700">今日运势</button>
            <button className="text-white px-4 py-2 rounded hover:bg-slate-700">历史结果</button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="p-6">
            <h2 className="text-lg mb-4">欢迎来到塔塔开门，我们为塔罗爱好者和完全不了解塔罗世界又有困惑的朋友们提供服务。</h2>
            <div className="mb-6">
              <h3 className="font-bold mb-2">最近大家常测的问题是：</h3>
              <div className="space-y-2">
                <div className="text-gray-600">xxxx</div>
                <div className="text-gray-600">xxxx</div>
                <div className="text-gray-600">xxxx</div>
              </div>
            </div>
            <div className="mb-6">
              <h3 className="font-bold mb-2">塔罗可以为您解答的问题类型：</h3>
              <div className="text-gray-600">xxxxxx</div>
            </div>
            <div className="mt-8">
              <h3 className="font-bold mb-2">案例图植入</h3>
              <div className="w-32 h-32 bg-gray-200 flex items-center justify-center">
                <div className="text-gray-400">图片占位符</div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="p-6">
          {showForm ? (
              // 当 showForm 为 true 时显示 FormComponent
              <FormComponent onSubmit={handleSubmit} />
            ) : (
              // 当 showForm 为 false 时显示 ResponseDisplay
              <ResponseDisplay loading={loading} error={error} response={apiResponse} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;