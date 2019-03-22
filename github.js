class Github {
  constructor() {
    this.client_id = '6d031e666aaff36684c2';
    this.client_secret = 'd52eba75e6dfbea73ab24938707e81b85a1392a0';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const profile = await profileResponse.json();
    return {
      profile
    }
  }
}