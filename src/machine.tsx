import {Machine} from 'xstate';

const loginMachine = Machine({
  id: 'loginMachine',
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