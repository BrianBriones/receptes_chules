<template>
  <nav class="navbar">
    <div class="nav-content">
      <div class="logo">🍳 ReceptesApp</div>
      <div class="nav-links">
        <router-link to="/" class="nav-item" active-class="active"
          >Inici</router-link
        >
        <router-link to="/search" class="nav-item" active-class="active"
          >Cerca</router-link
        >
        <router-link to="/favorites" class="nav-item" active-class="active"
          >Favorits</router-link
        >
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 0 20px;
}

.nav-content {
  max-width: 1200px;
  margin: 0 auto;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: 800;
  color: #7c3aed;
  letter-spacing: -0.5px;
}

.nav-links {
  display: flex;
  gap: 10px;
}

.nav-item {
  text-decoration: none;
  color: #6b7280;
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.nav-item:hover {
  color: #7c3aed;
  background-color: #f5f3ff;
}

.nav-item.active {
  color: #7c3aed;
  background-color: #ede9fe;
}
</style>
