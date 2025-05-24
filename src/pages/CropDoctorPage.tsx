import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Camera, 
  Upload, 
  X, 
  AlertCircle,
  CheckCircle,
  Volume2,
  Loader
} from 'lucide-react';

import { Player } from '@lottiefiles/react-lottie-player';

interface DiagnosisResult {
  disease: string;
  confidence: number;
  description: string;
  treatment: string;
  severity: 'low' | 'medium' | 'high';
}

const CropDoctorPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [diagnosisResult, setDiagnosisResult] = useState<DiagnosisResult | null>(null);
  const [activeTab, setActiveTab] = useState<'upload' | 'chat'>('upload');

  // Mock function to simulate image analysis
  const analyzeImage = () => {
    setIsAnalyzing(true);
    
    // Simulate API delay
    setTimeout(() => {
      // Mock diagnosis result
      const mockResult: DiagnosisResult = {
        disease: 'Early Blight',
        confidence: 92.5,
        description: 'Early blight is a common fungal disease that affects tomato plants. It is characterized by brown spots with concentric rings that form a "bull\'s-eye" pattern.',
        treatment: 'Remove infected leaves. Apply a copper-based fungicide every 7-10 days. Ensure proper spacing between plants for adequate air circulation.',
        severity: 'medium'
      };
      
      setDiagnosisResult(mockResult);
      setIsAnalyzing(false);
    }, 2500);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setSelectedImage(event.target?.result as string);
        setDiagnosisResult(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const resetAnalysis = () => {
    setSelectedImage(null);
    setDiagnosisResult(null);
  };

  const playVoiceNote = () => {
    // Mock function to simulate playing a voice note
    alert('Playing voice note in regional language...');
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'low':
        return 'bg-success-100 text-success-800';
      case 'medium':
        return 'bg-warning-100 text-warning-800';
      case 'high':
        return 'bg-error-100 text-error-800';
      default:
        return 'bg-neutral-100 text-neutral-800';
    }
  };

  return (
    <div className="pt-20 pb-20 min-h-screen bg-gradient-to-b from-primary-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">AI Crop Doctor</h1>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Upload a photo of your crop showing signs of disease, and our AI will diagnose the problem 
            and provide treatment recommendations in your language.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex mb-6 border-b border-neutral-200">
            <button 
              onClick={() => setActiveTab('upload')}
              className={`px-4 py-2 font-medium ${
                activeTab === 'upload' 
                  ? 'text-primary-600 border-b-2 border-primary-600' 
                  : 'text-neutral-500 hover:text-neutral-700'
              }`}
            >
              <Camera size={18} className="inline mr-2" />
              Upload Photo
            </button>
            <button 
              onClick={() => setActiveTab('chat')}
              className={`px-4 py-2 font-medium ${
                activeTab === 'chat' 
                  ? 'text-primary-600 border-b-2 border-primary-600' 
                  : 'text-neutral-500 hover:text-neutral-700'
              }`}
            >
              <span className="relative">
                WhatsApp-like Chat
                <span className="absolute -top-2 -right-2 bg-primary-500 text-white text-xs rounded-full px-1.5 py-0.5">New</span>
              </span>
            </button>
          </div>

          {activeTab === 'upload' ? (
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-6">
                {!selectedImage ? (
                  <div className="border-2 border-dashed border-neutral-300 rounded-lg p-8 text-center">
                    <Player
                      autoplay
                      loop
                      src="https://lottie.host/e2fc542a-c06c-4d8c-b384-baa9127eb5f4/38wz4o2Vdj.json"
                      style={{ height: '200px', width: '200px', margin: '0 auto' }}
                    />
                    <h3 className="text-xl font-medium mb-2">Upload a Photo</h3>
                    <p className="text-neutral-500 mb-6">
                      Take a clear photo of the affected plant part for accurate diagnosis
                    </p>
                    <label className="btn-primary cursor-pointer">
                      <Upload size={16} className="mr-2" />
                      Choose File
                      <input 
                        type="file" 
                        accept="image/*" 
                        className="hidden" 
                        onChange={handleImageUpload}
                      />
                    </label>
                  </div>
                ) : (
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-medium">Uploaded Image</h3>
                      <button 
                        onClick={resetAnalysis} 
                        className="p-2 text-neutral-500 hover:text-error-500"
                      >
                        <X size={20} />
                      </button>
                    </div>
                    <div className="relative mb-6">
                      <img 
                        src={selectedImage} 
                        alt="Uploaded crop" 
                        className="w-full h-64 object-contain rounded-lg border border-neutral-200" 
                      />
                    </div>
                    
                    {!isAnalyzing && !diagnosisResult && (
                      <button 
                        onClick={analyzeImage} 
                        className="btn-primary w-full"
                      >
                        Analyze Image
                      </button>
                    )}

                    {isAnalyzing && (
                      <div className="text-center py-6">
                        <Player
                          autoplay
                          loop
                          src="https://lottie.host/cb65f558-b1fe-405e-b546-717fd7a0ed79/yDLvhj5NwO.json"
                          style={{ height: '120px', width: '120px', margin: '0 auto' }}
                        />
                        <p className="text-neutral-600 mt-2">Analyzing your crop image...</p>
                      </div>
                    )}

                    {diagnosisResult && (
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="border rounded-lg p-6"
                      >
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h4 className="text-xl font-semibold">
                              <CheckCircle size={20} className="inline text-success-500 mr-2" />
                              Diagnosis Complete
                            </h4>
                            <p className="text-neutral-500">Confidence: {diagnosisResult.confidence}%</p>
                          </div>
                          <div className={`badge ${getSeverityColor(diagnosisResult.severity)}`}>
                            {diagnosisResult.severity.charAt(0).toUpperCase() + diagnosisResult.severity.slice(1)} Severity
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <h5 className="font-medium mb-1">Disease Identified:</h5>
                          <p className="text-lg font-semibold text-primary-700">
                            {diagnosisResult.disease}
                          </p>
                        </div>
                        
                        <div className="mb-4">
                          <h5 className="font-medium mb-1">Description:</h5>
                          <p className="text-neutral-600">
                            {diagnosisResult.description}
                          </p>
                        </div>
                        
                        <div className="mb-6">
                          <h5 className="font-medium mb-1">Recommended Treatment:</h5>
                          <ul className="list-disc pl-5 text-neutral-600 space-y-1">
                            {diagnosisResult.treatment.split('. ').map((item, index) => (
                              item && <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <button 
                          onClick={playVoiceNote} 
                          className="btn-primary"
                        >
                          <Volume2 size={16} className="mr-2" />
                          Play Voice Note (In Regional Language)
                        </button>
                      </motion.div>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="whatsapp-chat bg-white shadow-lg"
            >
              <div className="whatsapp-header">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Agent" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">AgriConnect Assistant</h3>
                  <p className="text-xs text-white/80">Online</p>
                </div>
              </div>
              
              <div className="whatsapp-messages">
                <div className="message-received">
                  <p>Hello! I'm your AgriConnect AI assistant. How can I help you today?</p>
                  <span className="text-xs text-neutral-500 block mt-1">10:30 AM</span>
                </div>
                
                <div className="message-sent">
                  <p>Hi, I think my tomato plants have some disease. The leaves have yellow spots.</p>
                  <span className="text-xs text-neutral-500 block mt-1">10:31 AM</span>
                </div>
                
                <div className="message-received">
                  <p>I'd be happy to help diagnose that. Could you send me a photo of the affected leaves?</p>
                  <span className="text-xs text-neutral-500 block mt-1">10:31 AM</span>
                </div>
                
                <div className="message-sent">
                  <p>Sure, here's a photo.</p>
                  <div className="mt-2 rounded-md overflow-hidden">
                    <img 
                      src="https://images.pexels.com/photos/2589457/pexels-photo-2589457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                      alt="Plant disease" 
                      className="w-full h-32 object-cover"
                    />
                  </div>
                  <span className="text-xs text-neutral-500 block mt-1">10:32 AM</span>
                </div>
                
                <div className="message-received">
                  <p>Analyzing your image...</p>
                  <span className="text-xs text-neutral-500 block mt-1">10:32 AM</span>
                </div>
                
                <div className="message-received">
                  <p><strong>Diagnosis:</strong> Your tomato plant likely has Early Blight, a fungal disease that's common in tomatoes.</p>
                  <p className="mt-2"><strong>Treatment:</strong> Remove infected leaves, apply a copper-based fungicide, and ensure good air circulation between plants.</p>
                  <p className="mt-2">Would you like me to send you a voice note with instructions in your preferred language?</p>
                  <span className="text-xs text-neutral-500 block mt-1">10:33 AM</span>
                </div>
                
                <div className="message-sent">
                  <p>Yes, please send me a voice note in Hindi.</p>
                  <span className="text-xs text-neutral-500 block mt-1">10:34 AM</span>
                </div>
                
                <div className="message-received">
                  <div className="bg-primary-200 rounded-full p-2 flex items-center space-x-2 w-48">
                    <Volume2 size={18} className="text-primary-700" />
                    <div className="flex-grow h-1 bg-primary-300 rounded-full">
                      <div className="h-full w-2/3 bg-primary-600 rounded-full"></div>
                    </div>
                    <span className="text-xs text-primary-700">0:42</span>
                  </div>
                  <span className="text-xs text-neutral-500 block mt-1">10:35 AM</span>
                </div>
              </div>
              
              <div className="whatsapp-input">
                <button className="p-2 text-neutral-500">
                  <Camera size={20} />
                </button>
                <input 
                  type="text" 
                  placeholder="Type a message" 
                  className="flex-grow bg-neutral-100 rounded-full py-2 px-4 outline-none"
                />
                <button className="p-2 bg-primary-500 rounded-full text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </button>
              </div>
            </motion.div>
          )}

          <div className="mt-12 bg-accent-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <AlertCircle size={20} className="text-accent-600 mr-2" />
              How It Works
            </h3>
            <ol className="list-decimal pl-5 space-y-2">
              <li className="text-neutral-700">Upload a clear photo of the affected part of your crop.</li>
              <li className="text-neutral-700">Our AI model analyzes the image to identify the disease.</li>
              <li className="text-neutral-700">Receive an accurate diagnosis with confidence score.</li>
              <li className="text-neutral-700">Get detailed treatment recommendations.</li>
              <li className="text-neutral-700">Listen to voice instructions in your regional language.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CropDoctorPage;