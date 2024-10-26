/* eslint-disable @typescript-eslint/no-unused-vars */
// App.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Folder, GitBranch, Cloud, Link, HardDrive } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../src/components/ui/select';
import { Button } from '../src/components/ui/button';


type TextPreview = {
  id: number;
  content: string;
};

const App = () => {
  const [activeSection, setActiveSection] = useState('upload');
  const [dragActive, setDragActive] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [targetColumn, setTargetColumn] = useState('');
  const [featuresColumn, setFeaturesColumn] = useState('');
  
  const leaderboardData = [
    { rank: 1, name: 'Alice', score: 9800 },
    { rank: 2, name: 'Bob', score: 9000 },
    { rank: 3, name: 'Charlie', score: 8700 },
    { rank: 4, name: 'Dave', score: 8500 },
    { rank: 5, name: 'Eve', score: 8000 },
  ];

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(e.type === "dragenter" || e.type === "dragover");
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    // Handle file drop logic here
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, message });
  };

  const renderNavbar = () => (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-gray-900 text-white p-6"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.h1 
          className="text-2xl font-bold"
          whileHover={{ scale: 1.05 }}
        >
          AI Training Platform
        </motion.h1>
        <div className="flex space-x-6">
          {['Home', 'Objective','Upload', 'Training', 'Leaderboard', 'Contact'].map((item) => (
            <motion.button
              key={item}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-lg ${
                activeSection.toLowerCase() === item.toLowerCase() 
                  ? 'bg-purple-600' 
                  : 'hover:bg-gray-800'
              }`}
              onClick={() => setActiveSection(item.toLowerCase())}
            >
              {item}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  );

  const renderUploadSection = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto p-8"
    >
      <div 
        className={`relative border-2 border-dashed rounded-lg p-12 text-center transition-all duration-300
          ${dragActive ? 'border-purple-500 bg-purple-50' : 'border-gray-300'}`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <motion.div 
          className="inline-flex items-center bg-purple-500 rounded-lg p-3 mb-6"
          whileHover={{ scale: 1.02 }}
        >
          <span className="text-white px-4 font-medium">Choose File</span>
          <div className="flex space-x-4 border-l border-purple-400 pl-4">
            {[Folder, HardDrive, GitBranch, Cloud, Link].map((Icon, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="text-white hover:bg-purple-600 p-2 rounded transition-colors"
              >
                <Icon className="w-5 h-5" />
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.p 
          className="text-gray-500"
          animate={{ y: dragActive ? 10 : 0 }}
        >
          Or drop files here
        </motion.p>
      </div>

      <motion.div 
        className="mt-8 bg-gray-900 rounded-lg p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="grid grid-cols-3 gap-6">
          {[1, 2, 3].map((num) => (
            <motion.div
              key={num}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 rounded-lg p-6 text-white"
            >
              <h3 className="font-medium">Text {num}: abcdefg</h3>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div 
        className="flex justify-center space-x-6 mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {['Auto Train', 'Manual Train'].map((text) => (
          <motion.button
            key={text}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-purple-600 text-white rounded-full px-10 py-4 font-medium hover:bg-purple-700 transition-colors"
          >
            {text}
          </motion.button>
        ))}
      </motion.div>
    </motion.div>
  );
  

  const renderLeaderboard = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto p-8"
    >
      <div className="bg-gray-900 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-white text-center mb-8">Leaderboard</h2>
        <div className="space-y-4">
          {leaderboardData.map((item, index) => (
            <motion.div
              key={item.rank}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`flex justify-between items-center p-6 rounded-lg ${
                item.rank <= 3 ? 'bg-gradient-to-r from-purple-600 to-purple-400' : 'bg-gray-800'
              }`}
            >
              <span className="text-white font-semibold text-xl">#{item.rank}</span>
              <span className="flex-grow text-white text-xl pl-6">{item.name}</span>
              <span className="text-white font-bold text-xl">{item.score}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  const renderContact = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto p-8"
    >
      <div className="bg-gray-900 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-white text-center mb-8">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {[
            { label: 'Name', value: name, setter: setName, type: 'text' },
            { label: 'Email', value: email, setter: setEmail, type: 'email' },
          ].map((field) => (
            <motion.div
              key={field.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <label className="block text-white text-sm font-medium mb-2">
                {field.label}
              </label>
              <input
                type={field.type}
                value={field.value}
                onChange={(e) => field.setter(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
              />
            </motion.div>
          ))}
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <label className="block text-white text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-3 bg-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
              rows={4}
              required
            />
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-bold text-white transition duration-300"
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </motion.div>
  );

  const renderTraining = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gray-900 p-8"
    >
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-12">Training Progress</h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2, repeat: Infinity }}
          className="h-4 bg-purple-600 rounded-full"
        />
        <motion.p
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-white text-center mt-8 text-xl"
        >
          Processing your data...
        </motion.p>
      </div>
    </motion.div>
  );

  const renderHomeSection = () => {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#2A2533] to-[#201B28] p-8">
        <div className="max-w-6xl mx-auto relative">
          {/* Main Content Area */}
          <div className="grid grid-cols-3 gap-8">
            {/* Main Headline Box */}
            <div className="col-span-2">
              <div className="bg-gradient-to-br from-[#3B3642] to-[#322B3D] rounded-2xl p-10 h-[240px] flex items-center group hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 border border-white/5">
                <div className="space-y-4">
                  <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200 text-6xl font-light leading-tight">
                    Automated Machine Learning and MLOps Platform
                  </h1>
                </div>
              </div>
            </div>
            
            {/* Right Column */}
            <div className="space-y-6">
              {/* Secondary Text Box */}
              <div className="bg-gradient-to-br from-[#3B3642] to-[#322B3D] rounded-2xl p-6 h-[160px] flex items-center group hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 border border-white/5">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200 text-3xl font-light leading-tight">
                  Streamline Your ML Workflow from Data Ingestion to Deployment
                </span>
              </div>
  
              {/* Upload Button */}
              <button 
                className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl px-8 py-4 w-full font-medium text-lg 
                           hover:from-purple-600 hover:to-purple-700 transform hover:-translate-y-1 transition-all duration-300
                           shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30"
              >
                <div className="flex items-center justify-center gap-3">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  Upload Dataset
                </div>
              </button>
  
              {/* Stats Container */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Models Trained', value: '1.2K+' },
                  { label: 'Accuracy Rate', value: '99.9%' },
                ].map((stat, i) => (
                  <div key={i} className="bg-[#322B3D]/50 rounded-xl p-4 border border-white/5">
                    <div className="text-purple-300 text-2xl font-semibold">{stat.value}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
                

          <div className="absolute -bottom-40 left-0 right-0 flex justify-between gap-6">
            {[
              'Data Preprocessing',
              'Model Training',
              'Evaluation',
              'Deployment'
            ].map((step, i) => (
              <div 
                key={i} 
                className="h-[120px] bg-gradient-to-b from-[#322B3D] to-[#201B28] rounded-t-2xl flex-1
                           hover:from-[#3B3642] hover:to-[#2A2533] transition-all duration-300 p-6
                           border-t border-l border-r border-white/5"
              >
                <div className="text-gray-400 text-lg font-medium">{step}</div>
                <div className="text-purple-300 text-sm mt-2">Stage {i + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const Objective = () => {
    const [targetColumn, setTargetColumn] = useState('');
    const [featuresColumn, setFeaturesColumn] = useState('');
  
    const textPreviews = [
      { id: 1, content: 'abcdefg' },
      { id: 2, content: 'abcdefg' },
      { id: 3, content: 'abcdefg' },
    ];
  
    const handleProceed = () => {
      console.log('Target Column:', targetColumn);
      console.log('Features Column:', featuresColumn);
      
    };
  
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black p-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
              Manual Train
            </h1>
            <p className="text-gray-400 text-lg">
              Select your training parameters below
            </p>
          </div>
  
          {/* File Preview Section */}
          <div className="mb-12">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl shadow-2xl backdrop-blur-lg border border-gray-700/50">
              <div className="px-8 py-4 border-b border-gray-700/50">
                <span className="text-gray-300 text-lg font-medium">File Preview</span>
              </div>
              <div className="p-8">
                <div className="grid grid-cols-3 gap-6">
                  {textPreviews.map((text) => (
                    <div
                      key={text.id}
                      className="bg-gray-800/40 rounded-xl p-6 backdrop-blur-sm hover:bg-gray-800/60 transition-all duration-200 border border-gray-700/30"
                    >
                      <div className="text-gray-400 text-sm mb-2">Text {text.id}</div>
                      <div className="text-gray-200 font-medium">{text.content}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
  
          {/* Selection Controls */}
          <div className="space-y-8 bg-gray-800/30 rounded-2xl p-8 backdrop-blur-lg border border-gray-700/50">
            <div className="flex items-center gap-8">
              <label className="text-gray-300 text-lg flex-shrink-0 w-64">
                Select Target Column
              </label>
              <div className="flex-1">
                <Select value={targetColumn} onValueChange={setTargetColumn}>
                  <SelectTrigger className="w-full bg-gray-900/50 text-gray-200 h-12 rounded-lg border-gray-600 hover:bg-gray-800/50 transition-colors">
                    <SelectValue placeholder="Select column" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 text-gray-200 border-gray-700">
                    <SelectItem value="column1">Column 1</SelectItem>
                    <SelectItem value="column2">Column 2</SelectItem>
                    <SelectItem value="column3">Column 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
  
            <div className="flex items-center gap-8">
              <label className="text-gray-300 text-lg flex-shrink-0 w-64">
                Select Features Column
              </label>
              <div className="flex-1">
                <Select value={featuresColumn} onValueChange={setFeaturesColumn}>
                  <SelectTrigger className="w-full bg-gray-900/50 text-gray-200 h-12 rounded-lg border-gray-600 hover:bg-gray-800/50 transition-colors">
                    <SelectValue placeholder="Select column" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 text-gray-200 border-gray-700">
                    <SelectItem value="column1">Column 1</SelectItem>
                    <SelectItem value="column2">Column 2</SelectItem>
                    <SelectItem value="column3">Column 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
  
            <div className="flex justify-end pt-6">
              <Button
                onClick={handleProceed}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-6 rounded-xl text-lg font-medium transition-all duration-200 shadow-lg shadow-purple-500/20"
              >
                Proceed
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black">
      {renderNavbar()}
      <AnimatePresence mode="wait">
  {activeSection === 'home' && renderHomeSection()}
  {activeSection === 'objective' && <Objective />}
  {activeSection === 'upload' && renderUploadSection()}
  {activeSection === 'training' && renderTraining()}
  {activeSection === 'leaderboard' && renderLeaderboard()}
  {activeSection === 'contact' && renderContact()}
</AnimatePresence>

    </div>
  );
};

export default App;