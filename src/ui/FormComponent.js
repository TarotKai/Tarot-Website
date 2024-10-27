import React, { useState } from 'react';

const FormComponent = ({ onSubmit }) => {
  const [needDetail, setNeedDetail] = useState('');
  const [needCard, setNeedCard] = useState('');
  const [textInput, setTextInput] = useState('');
  const [cardInput, setCardInput] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(textInput, needDetail, needCard, cardInput); // 调用传递的 onSubmit 函数
  };

  return (
    <form onSubmit={handleFormSubmit} className="space-y-6">
      <div>
        <label className="block mb-2">快来告诉我您本次想要占卜的问题吧~</label>
        <textarea
          className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          rows="4"
          placeholder="请输入内容"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
        />
      </div>

      <div>
        <p className="mb-4">告诉我你需要哪种解读报告？</p>
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="radio"
            name="consulting"
            value="detail"
            onChange={(e) => setNeedDetail(true)}
            className="focus:ring-2 focus:ring-blue-500"
          />
          <span>我不仅想知道占卜的结果，还想知道更多关于塔罗的牌面解读</span>
        </label>
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="radio"
            name="consulting"
            value="info"
            onChange={(e) => setNeedDetail(false)}
            className="focus:ring-2 focus:ring-blue-500"
          />
          <span>我只想知道占卜的结果</span>
        </label>
      </div>

      <div>
        <p className="mb-2">告诉我是否需要帮您抽牌？</p>
        <div className="space-y-2">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="newGuidance"
              value="需要"
              onChange={(e) => setNeedCard(true)}
              className="focus:ring-2 focus:ring-blue-500"
            />
            <span>需要</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="newGuidance"
              value="不用"
              onChange={(e) => setNeedCard(false)}
              className="focus:ring-2 focus:ring-blue-500"
            />
            <span>不用，告诉我你自己抽到的塔罗牌是什么：</span>
          </label>
          <textarea
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mt-2"
            placeholder="请输入内容"
            onChange={(e) => setCardInput(e.target.value)}
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        确认提交
      </button>
    </form>
  );
};

export default FormComponent;
