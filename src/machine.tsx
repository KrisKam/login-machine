import {Machine, assign, AnyEventObject} from 'xstate';

interface LoginMachineContext {
  username: string;
  password: string;
}

const loginMachine = Machine<any>({
  id: 'practiceLogin',
  initial: 'logged_out',
  context: {
    username: '',
    password: ''
  },
  states: {
    logged_out: {
      on: {
        'LOGIN': 'logging_in'
      }
    },
    logging_in: {
      on: {
        'ENTER_USERNAME': {
          actions: assign({
            username: (ctx: any, e: AnyEventObject) => {
              console.log(ctx);
              return {username: e.username}
            }
          })
        },
        'ENTER_PASSWORD': {
          actions: assign({
            password: (ctx: any, e: AnyEventObject) => {
            return {password: e.password}}
        })},
        'SUBMIT': 'validation'
      }
    },
    logged_in: {
      on: {
        'LOGOUT': 'logged_out'
      }
    },
    validation: {
      on: {
        'SUCCESS': 'logged_in',
        'FAIL': 'failure'
      }
    },
    failure: {
      on: {
        'RETRY': 'logging_in'
      }
    }
  }
});

export default loginMachine;