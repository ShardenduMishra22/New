const Home = () => {
  return (
    <div className="min-h-screen bg-[#2A2533] p-8">
      <div className="max-w-6xl mx-auto relative">
        {/* Main Content Area */}
        <div className="grid grid-cols-3 gap-8">
          {/* Text Box 1 */}
          <div className="col-span-2">
            <div className="bg-[#3B3642] rounded-lg p-8 h-[200px] flex items-center">
              <span className="text-white text-6xl font-light">Automated Machine Learning and MLOps Platform</span>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="space-y-4">
            {/* Text Box 2 */}
            <div className="bg-[#3B3642] rounded-lg p-4 h-[80px] flex items-center">
              <span className="text-white text-4xl font-light">Streamline Your ML Workflow from Data Ingestion to Deployment</span>
            </div>
            
            {/* Upload Button */}
            <button 
              className="bg-white text-[#8B70B2] rounded-full px-6 py-2 w-full font-medium"
            >
              Upload Dataset
            </button>
          </div>
        </div>
        
        {/* Bottom Dark Shapes */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-between gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div 
              key={i} 
              className="h-[100px] bg-black rounded-t-2xl flex-1"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;