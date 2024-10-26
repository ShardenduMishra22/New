import React, { useState, useCallback, useRef } from 'react';
import { 
  Folder, 
  GitBranch, 
  Cloud, 
  Link,
  HardDrive
} from 'lucide-react';

const FileUploadComponent = () => {
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const files = Array.from(e.dataTransfer.files);
    console.log('Dropped files:', files);
  }, []);

  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      console.log('Selected files:', files);
    }
  }, []);

  const handleChooseFile = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      {/* File Upload Area */}
      <div 
        className={`relative border-2 border-dashed rounded-lg p-8 text-center
          ${dragActive ? 'border-purple-500 bg-purple-50' : 'border-gray-300'}`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        {/* Button Group */}
        <div className="inline-flex items-center bg-purple-500 rounded-lg p-2 mb-4">
          <span className="text-white px-4">Choose File</span>
          <div className="flex space-x-4 border-l border-purple-400 pl-4">
            {/* Local Files */}
            <button 
              onClick={handleChooseFile}
              className="text-white hover:bg-purple-600 p-1 rounded transition-colors"
            >
              <Folder className="w-5 h-5" />
            </button>

            {/* Dropbox */}
            <button 
              onClick={() => console.log('Dropbox')}
              className="text-white hover:bg-purple-600 p-1 rounded transition-colors"
            >
              <HardDrive className="w-5 h-5" />
            </button>

            {/* Google Drive */}
            <button 
              onClick={() => console.log('Google Drive')}
              className="text-white hover:bg-purple-600 p-1 rounded transition-colors"
            >
              <GitBranch className="w-5 h-5" />
            </button>

            {/* OneDrive */}
            <button 
              onClick={() => console.log('OneDrive')}
              className="text-white hover:bg-purple-600 p-1 rounded transition-colors"
            >
              <Cloud className="w-5 h-5" />
            </button>

            {/* Link */}
            <button 
              onClick={() => console.log('Link')}
              className="text-white hover:bg-purple-600 p-1 rounded transition-colors"
            >
              <Link className="w-5 h-5" />
            </button>
          </div>
        </div>

        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          onChange={handleFileChange}
          multiple
        />
        <p className="text-gray-500">Or drop here</p>
      </div>

      {/* File Preview */}
      <div className="bg-gray-900 rounded-lg p-6">
        <div className="text-white grid grid-cols-3 gap-4">
          <div>
            <h3 className="font-medium mb-2">Text 1: abcdefg</h3>
          </div>
          <div>
            <h3 className="font-medium mb-2">Text 2: abcdefg</h3>
          </div>
          <div>
            <h3 className="font-medium mb-2">Text 3: abcdefg</h3>
          </div>
        </div>
      </div>

      {/* Training Buttons */}
      <div className="flex justify-center space-x-4">
        <button className="bg-purple-500 text-white rounded-full px-8 py-3 font-medium hover:bg-purple-600 transition-colors">
          Auto Train
        </button>
        <button className="bg-purple-500 text-white rounded-full px-8 py-3 font-medium hover:bg-purple-600 transition-colors">
          Manual Train
        </button>
      </div>
    </div>
  );
};

export default FileUploadComponent;