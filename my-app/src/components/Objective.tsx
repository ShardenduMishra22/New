import React, { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Button } from '../components/ui/button';

type TextPreview = {
  id: number;
  content: string;
};

const Objective = () => {
  const [targetColumn, setTargetColumn] = useState<string>('');
  const [featuresColumn, setFeaturesColumn] = useState<string>('');

  const textPreviews: TextPreview[] = [
    { id: 1, content: 'abcdefg' },
    { id: 2, content: 'abcdefg' },
    { id: 3, content: 'abcdefg' },
  ];

  const handleProceed = () => {
    console.log('Target Column:', targetColumn);
    console.log('Features Column:', featuresColumn);
  };

  return (
    <div className="min-h-screen bg-black p-8">
      <h1 className="text-4xl font-bold text-white text-center mb-8">Manual Train</h1>
      
      {/* File Preview Section */}
      <div className="max-w-3xl mx-auto mb-12">
        <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl shadow-2xl overflow-hidden">
          <div className="px-6 py-4 bg-gray-800/50">
            <span className="text-gray-300 text-sm font-medium">File Preview</span>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-3 gap-6">
              {textPreviews.map((text) => (
                <div 
                  key={text.id} 
                  className="bg-gray-800/50 rounded-lg p-4 backdrop-blur-sm"
                >
                  <div className="text-gray-300 font-medium">Text {text.id}: {text.content}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Dropdowns Section */}
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="flex items-center">
          <label className="text-white text-lg flex-shrink-0 w-64">
            Select Target Column:
          </label>
          <div className="flex-1">
            <Select value={targetColumn} onValueChange={setTargetColumn}>
              <SelectTrigger className="w-full bg-white text-gray-900 h-12 rounded-lg focus:ring-0 focus:ring-offset-0 border-0">
                <SelectValue placeholder="Select column" />
              </SelectTrigger>
              <SelectContent className="bg-white text-gray-900 border-gray-200">
                <SelectItem value="column1">Column 1</SelectItem>
                <SelectItem value="column2">Column 2</SelectItem>
                <SelectItem value="column3">Column 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex items-center">
          <label className="text-white text-lg flex-shrink-0 w-64">
            Select Features Column:
          </label>
          <div className="flex-1">
            <Select value={featuresColumn} onValueChange={setFeaturesColumn}>
              <SelectTrigger className="w-full bg-white text-gray-900 h-12 rounded-lg focus:ring-0 focus:ring-offset-0 border-0">
                <SelectValue placeholder="Select column" />
              </SelectTrigger>
              <SelectContent className="bg-white text-gray-900 border-gray-200">
                <SelectItem value="column1">Column 1</SelectItem>
                <SelectItem value="column2">Column 2</SelectItem>
                <SelectItem value="column3">Column 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex justify-end mt-8">
          <Button
            onClick={handleProceed}
            className="bg-purple-600 hover:bg-purple-700 text-white px-12 py-6 rounded-full text-lg font-medium"
          >
            Proceed
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Objective;