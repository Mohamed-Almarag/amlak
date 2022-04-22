<template>
  <div class="notify-box">
    <div class="d-flex flex-wrap">
      <div class="mx-2">
        <img src="@/assets/images/networks/we.png" width="25" alt="" />
      </div>
      <div class="mx-2">
        <img src="@/assets/images/networks/etisalat.png" width="60" alt="" />
      </div>
      <!-- <div class="mx-2">
        <img src="@/assets/images/networks/mobily.png" width="60" alt="" />
      </div> -->
      <div class="mx-2">
        <img src="@/assets/images/networks/orange.png" width="60" alt="" />
      </div>
      <div class="mx-2">
        <img src="@/assets/images/networks/vodafone.png" width="60" alt="" />
      </div>
      <!-- <div class="mx-2">
        <img src="@/assets/images/networks/zain.png" width="60" alt="" />
      </div> -->
    </div>

    <div class="d-flex align-center box-container mt-3">
      <div
        class="d-flex justify-space-between align-center companies-box ml-auto"
      >
        <div class="icon phone-icon pa-3 px-4 rounded">
          <v-icon small> mdi-cellphone </v-icon>
        </div>
        <div class="mx-3 selections">
          <select class="pa-3 px-4" @change="networkValue($event)">
            <option value="val-1">
              {{ $t('select network') }}
            </option>
            <option v-for="(item, i) in items" :key="i">
              {{ item }}
            </option>
          </select>
          <i class="bi-arrow-down icon"></i>
        </div>
      </div>
      <div class="input">
        <input
          type="text"
          required
          :placeholder="$t(`phone number`)"
          class="pa-3 px-4"
          v-model="userInfo.phone"
        />
      </div>
      <div class="button rounded pa-3 px-4">
        <button @click="btnSubmit(userInfo)">
          {{ $t(`subscribe`) }}
        </button>
      </div>
    </div>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="10">
        <div class="mt-3">
          <p class="text-center" v-if="network == null">
            إذا كنت عميلًا جديدًا، فستشترك في اوفر offer و سيتم محاسبتك ٢ جنيه
            مصري يوميا ، ويمكنك إلغاء الاشتراك في أي وقت عن طريق الرابط التالي [
            shorturl.at/sFQX2 ] والضغط علي [إلغاء الاشتراك] أو بإرسال رسالة
            تحتوي علي [ الغاء تب ] إلى رقم 1722 مجانًا. سيتم تجديد اشتراكك
            تلقائيًا كل يوم حتى تقوم بإلغاء الاشتراك سيتم تطبيق تكاليف التصفح
            المعتادة. لأية استفسارات ، يرجى الاتصال بنا على (+ 201111621161 ) أو
            عبر البريد الإلكتروني على (admin@offer.com). تطبق الشروط والأحكام.
          </p>
          <p v-else-if="network == 'فودافون EGY'" class="text-center">
            سوف تقوم بالاشتراك فى خدمة [اوفر offer ] مقابل [2] جنية مصري / يوميا
            تجدد تلقائيا. لالغاء الاشتراك, لعملاء [فودافون] ارسل [الغاء تب ] الى
            [6699 ] مجانا. لالغاء الاشتراك من الموقع قم بالدخول الى
            [shorturl.at/sFQX2] و اضغط الغاء الاشتراك . لأية استفسارات يرجى
            التواصل معانا على [(admin@offer.com)] استهلاك الانترنت سوف يخصم من
            الباقة الخاصة بك
          </p>
          <p v-else-if="network == 'اورنج EGY'" class="text-center">
            سوف تقوم بالاشتراك فى خدمة [اوفر offer ] مقابل [2] جنية مصري / يوميا
            تجدد تلقائيا. لالغاء الاشتراك, لعملاء [أورانج] ارسل [الغاء تب ] الى
            [5030 ] مجانا. لالغاء الاشتراك من الموقع قم بالدخول الى
            [shorturl.at/sFQX2] و اضغط الغاء الاشتراك . لأية استفسارات يرجى
            التواصل معانا على [(admin@offer.com)] استهلاك الانترنت سوف يخصم من
            الباقة الخاصة بك
          </p>
          <p v-else-if="network == 'اتصالات EGY'" class="text-center">
            إذا كنت عميلًا جديدًا، فستشترك في offer افر و سيتم محاسبتك
            <span class="error--text font-weight-bold"> ٢ جنيه مصري يوميا</span>
            ، ويمكنك إلغاء الاشتراك في أي وقت عن طريق الرابط التالي [
            shorturl.at/sFQX2 ] والضغط علي [إلغاء الاشتراك] أو بإرسال رسالة
            تحتوي علي [ الغاء تب ] إلى رقم 1722 مجانًا. سيتم تجديد اشتراكك
            تلقائيًا كل يوم حتى تقوم بإلغاء الاشتراك سيتم تطبيق تكاليف التصفح
            المعتادة. لأية استفسارات ، يرجى الاتصال بنا على (+ 201111621161 ) أو
            عبر البريد الإلكتروني على (admin@offer.com). تطبق الشروط والأحكام.
          </p>
          <p v-else-if="network == 'we EGY'" class="text-center">
            سوف تقوم بالاشتراك فى خدمة [اوفر offer ] مقابل [2] جنية مصري / يوميا
            تجدد تلقائيا. لالغاء الاشتراك, لعملاء [weوي] ارسل [الغاء تب ] الى
            [4041] مجانا. لالغاء الاشتراك من الموقع قم بالدخول الى
            [shorturl.at/sFQX2] و اضغط الغاء الاشتراك . لأية استفسارات يرجى
            التواصل معانا على [(admin@offer.com)] استهلاك الانترنت سوف يخصم من
            الباقة الخاصة
          </p>
          <!-- <p v-else-if="network == 'زين KSA'" class="text-center">
            عملاء السعودية سوف تقوم باللإشتراك مقابل 1 ريال / يوميا . لإلغاء
            الاشتراك لعملاء شبكة زين أرسل C WS إلى 708900 او قم بالدخول الي
            الموقع https://bit.ly/3uI75I2 واضغط إلغاء لأية استفسارات يرجى
            التواصل معانا علي info@offer.com
          </p>
          <p v-else-if="network == 'موبايلي KSA'" class="text-center">
            سوف تقوم باللإشتراك مقابل 1 ريال / يوميا . لإلغاء الاشتراك لعملاء
            شبكة موبايلي أرسل U66 إلى 606068 او قم بالدخول الي الموقع
            https://bit.ly/3uI75I2 واضغط إلغاء لأية استفسارات يرجى التواصل معانا
            علي info@offer.com
          </p> -->
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: ['btnTxt', 'btnSubmit', 'color', 'companies'],
  data() {
    return {
      items: ['فودافون EGY', 'اتصالات EGY', 'اورنج EGY', 'we EGY'],
      network: null,

      userInfo: {
        phone: null,
        operator_code: null,
      },
    }
  },
  methods: {
    networkValue(e) {
      this.network = e.target.value
      if (e.target.value == 'val-1') {
        this.network = null
      }
      if (e.target.value == 'فودافون EGY') this.userInfo.operator_code = 60202
      else if (e.target.value == 'اتصالات EGY')
        this.userInfo.operator_code = 60203
      else if (e.target.value == 'اورانج EGY')
        this.userInfo.operator_code = 60201
      else if (e.target.value == 'we EGY') this.userInfo.operator_code = 60201
      // else if (e.target.value == 'KSA زين') this.userInfo.operator_code = 42004
      // else if (e.target.value == 'KSA موبايلي')
      //   this.userInfo.operator_code = 42003
    },
  },
}
</script>
<style lang="scss" scoped>
.notify-box {
  .box-container {
    .button {
      background: linear-gradient(233deg, #575a89, #575a89, #575a89);
      color: #fff;
      transform: scale(1.1);
    }

    .input {
      border-block: 2px solid #40e0d0;
      width: 70%;

      input {
        width: 100%;
      }
    }

    .companies-box {
      width: 25%;
      border-block: 2px solid #40e0d0;

      select {
        &:focus {
          outline: none;
        }
      }

      .icon {
        &.phone-icon {
          background: linear-gradient(233deg, #40e0d0, #6495ed, #6495ed);
        }
        transform: scale(1.1);

        i {
          color: #fff;
        }
      }
    }

    @media (max-width: 873px) {
      .icon {
        display: none !important;
      }

      .companies-box {
        text-align: center;
        border: 2px solid #40e0d0;
        border-radius: 0 5px 5px 0;

        select {
          transform: translateX(12px);
        }
      }
    }
    @media (max-width: 577px) {
      .companies-box {
        width: 30%;
        select {
          transform: translateX(25px);
        }
      }
    }
  }
}
</style>
