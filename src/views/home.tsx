// import { mapActions, mapState } from 'vuex'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  computed: {
    // ...mapState('user', ['userName'])
  },
  methods: {
    // ...mapActions('user', {
    //   login: 'login'
    // })
  }
})
export default class Home extends Vue {
  readonly userName!: string
  readonly login!: (val: any) => void
  created() {
    // this.login('Edward12')
  }
  render() {
    return <div>1221</div>
  }
}
