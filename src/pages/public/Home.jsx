import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/ui/Card';
import OpportunityCard from '../../components/shared/OpportunityCard';
import { mockOpportunities } from '../../data/mock/opportunities';

const Home = () => {
  const featuredOpportunities = mockOpportunities.slice(0, 3);
  
  return (
    <div className="min-h-screen bg-dark-950">
      {/* Hero Section */}
      <div className="min-h-screen bg-hero-gradient relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-200px)]">
            {/* Left Section - Cards */}
            <div className="space-y-6 animate-slide-in-right">
              <div className="bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-primary-500/30 rounded-lg p-4 backdrop-blur-sm animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <span className="text-primary-400 text-sm font-medium">Vision 2030: Sustainable Investment</span>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-card-gradient backdrop-blur border border-primary-500/30 p-5 hover:border-primary-500/50 transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                  <h3 className="text-dark-400 text-sm mb-2">Priority Neighborhoods</h3>
                  <p className="text-white font-semibold">Al-Naqrah, Mashar</p>
                </Card>
                
                <Card className="bg-card-gradient backdrop-blur border border-primary-500/30 p-5 hover:border-primary-500/50 transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  <h3 className="text-dark-400 text-sm mb-2">Conversion to Opportunities</h3>
                  <span className="inline-block px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-sm animate-pulse">Ready</span>
                </Card>
              </div>
              
              <div className="bg-card-gradient backdrop-blur border border-primary-500/30 rounded-lg p-6 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <h3 className="text-primary-400 font-semibold mb-4">Investment Decision Center</h3>
                <div className="grid grid-cols-2 gap-4">
                  <Card className="bg-dark-800/50 border border-secondary-500/30 p-4 hover:border-secondary-500/50 transition-all duration-300">
                    <h4 className="text-dark-400 text-xs mb-1">Seasonal Demand</h4>
                    <p className="text-primary-400 font-semibold">High</p>
                  </Card>
                  <Card className="bg-dark-800/50 border border-secondary-500/30 p-4 hover:border-secondary-500/50 transition-all duration-300">
                    <h4 className="text-dark-400 text-xs mb-1">Manageable Risks</h4>
                    <p className="text-white font-semibold">7 Opportunities</p>
                  </Card>
                </div>
              </div>
              
              <Card className="bg-card-gradient backdrop-blur border border-primary-500/30 p-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <h3 className="text-primary-400 font-semibold mb-3">Why is this important?</h3>
                <p className="text-dark-300 text-sm leading-relaxed">
                  LandX provides clearer analysis of investment opportunities in seasonal lands, giving investors and regulatory bodies a clearer reading of opportunities, neighborhoods, risks, and returns before official submission.
                </p>
              </Card>
            </div>
            
            {/* Right Section - Hero Content */}
            <div className="text-left space-y-6 animate-slide-in-left">
              <div className="space-y-2">
                <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400 animate-fade-in">
                  LandX
                </h1>
                <p className="text-primary-400 text-xl animate-fade-in" style={{ animationDelay: '0.1s' }}>At LandX we offer</p>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
                Clearer analysis of opportunities before applying to official channels.
              </h2>
              
              <p className="text-dark-400 text-lg leading-relaxed animate-slide-up" style={{ animationDelay: '0.3s' }}>
                An indicative platform supporting investment decisions in Hail region, providing investors and regulatory bodies with a clearer reading of opportunities, neighborhoods, risks, and returns before official submission.
              </p>
              
              <div className="space-y-4 pt-4">
                <Link to="/register" className="group flex items-center justify-start gap-3 text-primary-400 hover:text-primary-300 transition-all duration-300 hover:translate-x-2 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  <span className="w-10 h-10 rounded-full bg-gradient-to-r from-primary-500/20 to-secondary-500/20 flex items-center justify-center group-hover:from-primary-500/30 group-hover:to-secondary-500/30 transition-all duration-300 group-hover:scale-110">
                    →
                  </span>
                  <span className="text-lg font-semibold">Start a consultation request</span>
                </Link>
                
                <Link to="/opportunities" className="group flex items-center justify-start gap-3 text-primary-400 hover:text-primary-300 transition-all duration-300 hover:translate-x-2 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                  <span className="w-10 h-10 rounded-full bg-gradient-to-r from-primary-500/20 to-secondary-500/20 flex items-center justify-center group-hover:from-primary-500/30 group-hover:to-secondary-500/30 transition-all duration-300 group-hover:scale-110">
                    →
                  </span>
                  <span className="text-lg font-semibold">Browse opportunities</span>
                </Link>
                
                <Link to="/opportunities" className="group flex items-center justify-start gap-3 text-primary-400 hover:text-primary-300 transition-all duration-300 hover:translate-x-2 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                  <span className="w-10 h-10 rounded-full bg-gradient-to-r from-primary-500/20 to-secondary-500/20 flex items-center justify-center group-hover:from-primary-500/30 group-hover:to-secondary-500/30 transition-all duration-300 group-hover:scale-110">
                    →
                  </span>
                  <span className="text-lg font-semibold">Browse available lands</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Featured Opportunities Section */}
      <section className="bg-gradient-to-b from-dark-900 to-dark-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400 mb-4 animate-fade-in">
              Featured Investment Opportunities
            </h2>
            <p className="text-dark-400 max-w-2xl mx-auto animate-slide-up">
              Explore the latest investment opportunities in seasonal agricultural lands
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredOpportunities.map((opportunity, index) => (
              <div key={opportunity.id} className="animate-fade-in" style={{ animationDelay: `${0.1 * index}s` }}>
                <OpportunityCard opportunity={opportunity} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link to="/opportunities" className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-semibold transition-all duration-300 hover:translate-x-2">
              View all investment opportunities
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
