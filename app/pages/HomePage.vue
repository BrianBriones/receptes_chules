<template>
  <div class="home-page">
    <div class="welcome-card">
      <h1>Benvingut a les receptes més chules 🍳</h1>
      <p>Explora, cerca i guarda els teus plats preferits en un sol lloc.</p>
      <NuxtLink to="/search" class="cta-button button"
        >Començar a cercar</NuxtLink
      >

      <div class="decorative-line"></div>
    </div>

    <section class="features">
      <div class="feature-grid">
        <div class="feature card">
          <h3>Explora receptes</h3>
          <p class="muted">
            Navega per milers de receptes, filtrades per ingredients i lletres.
          </p>
        </div>
        <div class="feature card">
          <h3>Guarda els teus favorits</h3>
          <p class="muted">
            Marca les receptes que més t'agraden i accedeix-les ràpidament.
          </p>
        </div>
        <div class="feature card">
          <h3>Inspira't</h3>
          <p class="muted">
            Suggeriments, passos i ingredients clars per cuinar millor cada
            plat.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  padding: 56px 20px;
  background: linear-gradient(135deg, #f9fafb 0%, #e5e7eb 100%);
}
.welcome-card {
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(6px);
  padding: 4.5rem;
  border-radius: 24px;
  box-shadow: 0 24px 40px -10px rgba(2, 6, 23, 0.08),
    0 12px 18px -8px rgba(2, 6, 23, 0.04);
  text-align: center;
  max-width: 820px;
  border: 1px solid rgba(255, 255, 255, 0.6);
  transition: transform 0.3s ease;
  margin-bottom: 32px;
}
.welcome-card:hover {
  transform: translateY(-5px);
}
h1 {
  color: #4c1d95;
  margin-bottom: 1.5rem;
  font-size: 3rem;
  font-weight: 800;
  letter-spacing: -1px;
  line-height: 1.1;
}
p {
  color: #4b5563;
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: 2rem;
}
.cta-button {
  display: inline-block;
  background-color: #7c3aed;
  color: white;
  padding: 12px 32px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(124, 58, 237, 0.3);
}
.cta-button:hover {
  background-color: #6d28d9;
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(124, 58, 237, 0.4);
}
.decorative-line {
  width: 60px;
  height: 6px;
  background-color: #7c3aed;
  margin: 2rem auto 0;
  border-radius: 3px;
}

.features {
  margin-top: 56px;
}
.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-top: 36px;
  padding: 56px 20px;
}
.feature h3 {
  margin: 0 0 8px;
  color: var(--accent);
}
.feature p {
  margin: 0;
}

.feature.card {
  padding: 20px;
}

@media (max-width: 800px) {
  .feature-grid {
    grid-template-columns: 1fr;
  }
  .home-page {
    padding: 12px;
  }
}
</style>
