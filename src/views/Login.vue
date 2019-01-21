<template>
<v-container fill-height>
  <v-layout align-center justify-center>
    <v-flex class="login-form text-xs-center">
      <div class="display-1 mb-3">BugBusters</div>
      <v-card light>
          <v-card-text>
              <div class="subheading">
                <template v-if="!options.isLoggingIn">Neuen Account erstellen</template></div>
              <v-form>
                  <v-text-field v-if="!options.isLoggingIn" v-model="user.name"
                  light prepend-icon="person" label="Name"></v-text-field>
                  <v-text-field v-model="user.email" light prepend-icon="email"
                  label="Email" type="email"></v-text-field>
                  <v-text-field v-model="user.password" light prepend-icon="lock"
                  label="Passwort" type="password"></v-text-field>
                  <v-checkbox v-if="options.isLoggingIn" v-model="options.shouldStayLoggedIn"
                  light label="Eingeloggt bleiben?" hide-details></v-checkbox>
                  <v-btn v-if="options.isLoggingIn" @click.prevent="login"
                   dark block type="submit">
                    Einloggen
                  </v-btn>
                  <v-btn v-else dark block type="submit"
                  @click.prevent="options.isLoggingIn = true">
                    Registrieren
                  </v-btn>
              </v-form>
          </v-card-text>
      </v-card>
      <div v-if="options.isLoggingIn">Noch kein Account?
          <v-btn light @click="options.isLoggingIn = false">Registrieren</v-btn>
      </div>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: 'admin',
        password: '',
        name: '',
      },
      options: {
        isLoggingIn: true,
        shouldStayLoggedIn: false,
      },
    };
  },

  methods: {
    login() {
      switch (this.user.email) {
        case 'admin':
          this.$store.commit('setUser', { name: 'Admin', type: 'vip' });
          break;
        case 'hans':
          this.$store.commit('setUser', { name: 'Hans', type: 'standard' });
          break;
        case 'Hausmeister':
          this.$store.commit('setUser', { name: 'Hausmeister', type: 'worker' });
          break;
        default:
          this.$store.commit('setUser', { name: this.user.email, type: 'standard' });
          break;
      }

      this.$router.push({ name: 'home' });
    },
  },
};
</script>

<style>
.login-form {
  max-width: 500px
}
</style>
