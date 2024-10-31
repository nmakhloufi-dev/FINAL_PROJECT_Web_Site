// frontend/src/pages/Home.js
import React from 'react';
import './Home.css';


const Home = () => {
  return (
    <div className="home">
      <header>
      <img src="/logo/logo.png" alt="EduAction Logo" className="logo" />

        <nav>
          <a href="/">Accueil</a>
          <a href="/activites">Nos activités</a>
          <a href="/album">Album photos</a>
          <a href="/inscription">Inscrire mon enfant</a>
          <a href="/offres">Découvrez nos offres</a>
          <a href="/temoignages">Témoignages</a>
        </nav>
      </header>

      <main>
        <section className="about">
        <div className="about-box"> 
          <h1>Qui sommes-nous ?</h1>
                    <p> Bienvenue chez EduAction, une crèche dédiée à l'épanouissement et au développement de votre enfant.

Chez EduAction, nous croyons fermement que chaque enfant est unique et mérite une attention personnalisée pour
 stimuler son développement cognitif, social et émotionnel. Fondée sur des valeurs d'amour, de respect et 
 d'apprentissage continu, notre crèche offre un environnement sûr, chaleureux et inclusif où les enfants
  peuvent explorer, apprendre et grandir.
  <br/> 
 <br/> Notre équipe dévouée est composée de professionnels qualifiés et passionnés, engagés à fournir des 
soins de haute qualité et à encourager le potentiel de chaque enfant. Avec des programmes éducatifs adaptés
 à chaque tranche d'âge, des activités ludiques et éducatives, ainsi qu'une approche centrée sur l'enfant, 
 nous visons à nourrir la curiosité naturelle et la créativité de chaque petit explorateur.
 <br/> 
 <br/>Chez EduAction, nous croyons en la collaboration étroite avec les parents pour soutenir le développement 
global de chaque enfant. Nous nous engageons à maintenir une communication ouverte et transparente, à partager 
les progrès et les moments significatifs, et à créer une véritable communauté de soutien et d'encouragement.
<br/>  
<br/>Nous sommes fiers de faire partie du parcours éducatif de votre enfant et nous nous engageons à offrir une
 expérience enrichissante et mémorable à chaque étape de son développement.
 <br/> 
 <br/>Rejoignez-nous chez EduAction, où chaque jour est une nouvelle aventure vers la découverte, l'apprentissage 
 et le bonheur !</p>
 </div>
 <div className="espace-parents">
  <a href="/espace-parents">
    <span>Espace Parents</span>
  </a>
</div>

        </section>
      </main>

      <footer>
        <p>Comment nous trouver ?</p>
        <p>Suivez-nous</p>
        <div className="social-icons">
  <a href="https://www.facebook.com/eduactiondz" target="_blank" rel="noopener noreferrer">
    <img src="/logo/facebook.png" alt="Facebook" />
  </a>
  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
    <img src="/logo/instagram.png" alt="Instagram" />
  </a>
</div>

        
      </footer>
    </div>
  );
};

export default Home;
