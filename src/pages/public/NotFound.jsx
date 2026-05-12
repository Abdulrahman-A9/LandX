import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import { SearchIcon, HomeIcon, ArrowRightIcon } from '../../components/ui/Icons';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pearl-50 via-pearl-100 to-brown-200 text-brown-900 flex items-center justify-center px-4">
      <Card className="text-center py-16 px-8 max-w-2xl w-full bg-card-gradient border border-brown-300 animate-fade-in">
        <div className="w-24 h-24 bg-gradient-to-r from-brown-200/20 to-brown-300/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-brown-400">
          <SearchIcon className="w-12 h-12 text-brown-600" />
        </div>
        
        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brown-700 to-brown-500 mb-4">
          404
        </h1>
        
        <h2 className="text-2xl font-bold text-brown-900 mb-4">
          الصفحة غير موجودة
        </h2>
        
        <p className="text-brown-700 mb-8 max-w-md mx-auto">
          عذراً، الصفحة التي تبحث عنها غير موجودة أو قد تم نقلها. يمكنك العودة للصفحة الرئيسية أو تصفح الفرص الاستثمارية.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button size="lg" className="w-full sm:w-auto">
              <HomeIcon className="w-5 h-5 ml-2 inline" />
              العودة للرئيسية
            </Button>
          </Link>
          
          <Link to="/opportunities">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              تصفح الفرص
              <ArrowRightIcon className="w-5 h-5 mr-2 inline" />
            </Button>
          </Link>
        </div>
        
        <div className="mt-8 pt-8 border-t border-brown-300">
          <p className="text-brown-600 text-sm mb-4">هل تحتاج مساعدة؟</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link to="/contact" className="text-brown-700 hover:text-brown-900 font-medium transition-colors">
              تواصل معنا
            </Link>
            <span className="text-brown-400">|</span>
            <Link to="/investment-analysis" className="text-brown-700 hover:text-brown-900 font-medium transition-colors">
              التحليل الاستثماري
            </Link>
            <span className="text-brown-400">|</span>
            <Link to="/investor-journey" className="text-brown-700 hover:text-brown-900 font-medium transition-colors">
              رحلة المستثمر
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default NotFound;
