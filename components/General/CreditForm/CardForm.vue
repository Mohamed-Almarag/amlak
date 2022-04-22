<template>
  <div class="">
    <div class="my-11">
      <div class="d-flex justify-content-center align-items-center">
        <span class="registerNumber">713,903 Already Registered!</span>
      </div>
    </div>
    <div class="card-form">
      <div class="card-form__inner">
        <div class="card-input">
          <label for="cardName" class="card-input__label"> Name On Card </label>
          <input
            id="cardName"
            class="card-input__input"
            v-model="name"
            autocomplete="off"
            required
          />
        </div>
        <div class="card-input">
          <div class="row">
            <div class="col-md-6 col-sm-12">
              <label for="cardNumber" class="card-input__label">
                Number Of Card
              </label>
              <input
                v-model="cardNumber"
                autofocus
                id="cardNumber"
                class="card-input__input"
                autocomplete="off"
                maxlength="16"
                min="0"
                required
              />
            </div>
            <div class="col-md-6 col-sm-12">
              <div class="card-form__row">
                <div class="card-form__col">
                  <div class="card-form__group">
                    <label for="cardMonth" class="card-input__label">
                      Expiration Date (Month , Year)
                    </label>
                    <select
                      class="card-input__input -select"
                      id="cardMonth"
                      v-model="expireMonth"
                    >
                      <option value="" disabled selected>Month</option>
                      <option
                        v-for="n in 12"
                        :value="n < 10 ? '0' + n : n"
                        :key="n"
                      >
                        {{ 10 > n ? '0' + n : n }}
                      </option>
                    </select>
                    <select
                      class="card-input__input -select"
                      id="cardYear"
                      v-model="expireYear"
                      required
                    >
                      <option value="" disabled selected>Year</option>
                      <option
                        v-for="(n, $index) in 12"
                        :value="$index + currentYear"
                        :key="n"
                      >
                        {{ $index + currentYear }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-input">
          <div class="row">
            <div class="col-md-6 col-sm-12">
              <div class="card-form__col -cvv">
                <div class="card-input">
                  <label for="cardCvv" class="card-input__label">CVV</label>
                  <input
                    class="card-input__input"
                    id="cardCvv"
                    :value="cvv"
                    autocomplete="off"
                    maxlength="4"
                    required
                  />
                </div>
              </div>
            </div>
            <div class="col-md-6 col-sm-12">
              <div class="card-form__col -cvv">
                <div class="card-input">
                  <label for="cardCvv" class="card-input__label">Country</label>
                  <select
                    class="card-input__input -select"
                    id="cardMonth"
                    v-model="country"
                  >
                    <option :value="`egypt- ${x}`" v-for="x in 5" :key="x.id">
                      egypt- {{ x }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div
            class="
              col-md-6 col-sm-12
              mb-3
              d-flex
              justify-content-center
              align-items-center
            "
          >
            <button role="submit" @click="submitCard" class="card-form__button">
              Submit
            </button>
          </div>
          <div
            class="
              col-md-6 col-sm-12
              mb-3
              d-flex
              justify-content-center
              align-items-center
            "
          >
            <p class="m-0 ">Enjoy 7 Days For Free</p>
          </div>
        </div>
      </div>
    </div>
    <div class="my-11">
      <div class="d-flex justify-content-center align-items-center">
        <span class="text-dimied">Just Pay For The Course And You Will Get A Week For Free</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cardNumber: '',
      expireMonth: '',
      expireYear: '',
      name: '',
      cvv: '',
      currentYear: new Date().getFullYear(),
      country: '',
    }
  },
  methods: {
    submitCard() {
      alert(`
        ${this.cardNumber}\n
        ${this.name}\n
        ${this.expireMonth}/${this.expireYear}\n
        ${this.cvv} \n
        ${this.country}
        `)
    },
  },
}
</script>

<style scoped lang="scss">
.card-container {
  margin: 30px auto 50px auto;
}

.card-form {
  max-width: 570px;
  margin: auto;
  width: 100%;

  &__inner {
    background: #fff;
    // box-shadow: 0 30px 60px 0 rgba(90, 116, 148, 0.4);
    border-radius: 10px;
    padding: 20px;
  }

  &__row {
    display: flex;
    align-items: flex-start;
  }

  &__col {
    flex: auto;
    margin-right: 15px;

    &:last-child {
      margin-right: 0;
    }

    // &.-cvv {
    //   max-width: 150px;
    // }
  }

  &__group {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;

    .card-input__input {
      flex: 1;
      margin-right: 15px;

      &:last-child {
        margin-right: 0;
      }
    }
  }

  &__button {
    width: 100%;
    height: 55px;
    background: $main-color;
    border: none;
    border-radius: 5px;
    font-size: 22px;
    font-weight: 500;
    // box-shadow: 3px 10px 20px 0px rgba(35, 100, 210, 0.3);
    color: #fff;
    // margin-top: 20px;
    cursor: pointer;

    &:hover {
      background: darken(#9e0000, 5%);
    }
  }
}

.card-input {
  margin-bottom: 20px;
  &__label {
    margin-bottom: 5px;
    color: #1a3b5d;
    width: 100%;
    display: block;
    text-align: left;
  }
  &__input {
    width: 100%;
    height: 50px;
    border-radius: 5px;
    box-shadow: none;
    border: 1px solid #ced6e0;
    transition: all 0.3s ease-in-out;
    font-size: 18px;
    padding: 5px 15px;
    background: none;
    color: #1a3b5d;

    &:hover,
    &:focus {
      border-color: #38a294;
    }

    &:focus {
      box-shadow: 0px 10px 20px -13px rgba(32, 56, 117, 0.35);
    }
    &.-select {
      -webkit-appearance: none;
      background-image: url('/img/select.png');
      background-size: 12px;
      background-position: 90% center;
      background-repeat: no-repeat;
      padding-right: 30px;
    }
  }
}
.registerNumber {
  background: #f4fbf6;
  color: #2fba4b;
  padding: 15px;
}
</style>