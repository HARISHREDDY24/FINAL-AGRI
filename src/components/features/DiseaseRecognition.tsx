import React, { useState, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';
import { Upload, X, AlertCircle } from 'lucide-react';
import { Player } from '@lottiefiles/react-lottie-player';

interface DiseaseRecognitionProps {
  onResult: (result: {
    disease: string;
    confidence: number;
    recommendations: string[];
  }) => void;
}

const DiseaseRecognition: React.FC<DiseaseRecognitionProps> = ({ onResult }) => {
  const [model, setModel] = useState<tf.LayersModel | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadModel();
  }, []);

  const loadModel = async () => {
    try {
      setIsLoading(true);
      // In a real app, load your trained model from a URL
      // const loadedModel = await tf.loadLayersModel('model_url');
      // setModel(loadedModel);
      setIsLoading(false);
    } catch (err) {
      setError('Failed to load disease recognition model');
      setIsLoading(false);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setSelectedImage(event.target?.result as string);
        analyzeCropDisease(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeCropDisease = async (imageData: string) => {
    setIsLoading(true);
    try {
      // Mock analysis result
      setTimeout(() => {
        onResult({
          disease: 'Early Blight',
          confidence: 95.5,
          recommendations: [
            'Remove infected leaves immediately',
            'Apply copper-based fungicide',
            'Improve air circulation between plants'
          ]
        });
        setIsLoading(false);
      }, 2000);
    } catch (err) {
      setError('Failed to analyze image');
      setIsLoading(false);
    }
  };

  const resetImage = () => {
    setSelectedImage(null);
    setError(null);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      {error && (
        <div className="mb-4 p-4 bg-error-100 text-error-700 rounded-lg flex items-center">
          <AlertCircle size={20} className="mr-2" />
          {error}
        </div>
      )}

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
          <label className="btn-primary cursor-pointer inline-flex items-center">
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
            <h3 className="text-xl font-medium">Analyzing Image</h3>
            <button
              onClick={resetImage}
              className="p-2 text-neutral-500 hover:text-error-500 transition-colors"
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
          {isLoading && (
            <div className="text-center">
              <Player
                autoplay
                loop
                src="https://lottie.host/cb65f558-b1fe-405e-b546-717fd7a0ed79/yDLvhj5NwO.json"
                style={{ height: '120px', width: '120px', margin: '0 auto' }}
              />
              <p className="text-neutral-600 mt-2">Analyzing your crop image...</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DiseaseRecognition;