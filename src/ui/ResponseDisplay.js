// ResponseDisplay.js
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const ResponseDisplay = ({ loading, error, response }) => {
  if (loading) return <p>正在加载结果...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="border p-4 rounded mt-4 bg-gray-50">
      <h3 className="font-bold mb-2">解读结果：</h3>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{response?.response}</ReactMarkdown>
    </div>
  );
};

export default ResponseDisplay;
