import React from 'react';
function Overview_3() {
  const achievementCards = [
    {
      title: "Machine Learning",
      description: "Implemented a neural network model that improved product recommendation accuracy by 30%, leading to a 15% increase in e-commerce sales.",
    },
    {
      title: "Quantum Computing",
      description: "Developed a quantum algorithm that optimized supply chain logistics, reducing operational costs by 20% for a Fortune 500 company.",
    },
    {
      title: "Data Science",
      description: "Created a predictive model for customer churn, enabling proactive retention strategies that increased customer loyalty by 25%.",
    },
    {
      title: "Artificial Intelligence",
      description: "Built an AI-powered chatbot that improved customer service response times by 50% and increased customer satisfaction scores by 35%.",
    },
  ];

  return (
    <div className="full-page">  {/* Full page container */}
      <div className="container">
        <h2 className="text-center mb-5">See what others are achieving through learning</h2>
        <div className="row">
          {achievementCards.map((card, index) => (
            <div key={index} className="col-lg-3 col-md-6 mb-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <h3 className="card-title pb-2">{card.title}</h3>
                  <p className="card-text mt-auto" style={{ fontSize: '0.9rem' }}>{card.description}</p>
                </div>
                <div className="card-footer bg-white border-0 mt-auto">
                  <button 
                    className="btn btn-primary w-100 mb-3" 
                    aria-label={`Learn more about ${card.title}`}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Overview_3;
