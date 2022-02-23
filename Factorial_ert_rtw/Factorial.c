/*
 * File: Factorial.c
 *
 * Code generated for Simulink model 'Factorial'.
 *
 * Model version                  : 1.1
 * Simulink Coder version         : 8.10 (R2016a) 10-Feb-2016
 * C/C++ source code generated on : Wed Feb 23 18:45:27 2022
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: Intel->x86-64 (Windows64)
 * Code generation objectives: Unspecified
 * Validation result: Not run
 */

#include "Factorial.h"
#include "Factorial_private.h"

/* External inputs (root inport signals with auto storage) */
ExtU_Factorial_T Factorial_U;

/* External outputs (root outports fed by signals with auto storage) */
ExtY_Factorial_T Factorial_Y;

/* Real-time model */
RT_MODEL_Factorial_T Factorial_M_;
RT_MODEL_Factorial_T *const Factorial_M = &Factorial_M_;

/* Model step function */
void Factorial_step(void)
{
  int32_T s1_iter;
  real_T UnitDelay_DSTATE;
  real_T tmp;
  int32_T exitg1;

  /* Outputs for Iterator SubSystem: '<Root>/For Iterator Subsystem' incorporates:
   *  ForIterator: '<S1>/For Iterator'
   */
  /* InitializeConditions for UnitDelay: '<S1>/Unit Delay' */
  UnitDelay_DSTATE = 1.0;
  s1_iter = 1;

  /* End of Outputs for SubSystem: '<Root>/For Iterator Subsystem' */
  do {
    exitg1 = 0;
    if (Factorial_U.In1 < 0.0) {
      tmp = ceil(Factorial_U.In1);
    } else {
      tmp = floor(Factorial_U.In1);
    }

    if (rtIsNaN(tmp) || rtIsInf(tmp)) {
      tmp = 0.0;
    } else {
      tmp = fmod(tmp, 4.294967296E+9);
    }

    if (s1_iter <= (tmp < 0.0 ? -(int32_T)(uint32_T)-tmp : (int32_T)(uint32_T)
                    tmp)) {
      Factorial_Y.Out1 = (real_T)s1_iter * UnitDelay_DSTATE;
      UnitDelay_DSTATE = Factorial_Y.Out1;
      s1_iter++;
    } else {
      exitg1 = 1;
    }
  } while (exitg1 == 0);
}

/* Model initialize function */
void Factorial_initialize(void)
{
  /* Registration code */

  /* initialize non-finites */
  rt_InitInfAndNaN(sizeof(real_T));

  /* initialize error status */
  rtmSetErrorStatus(Factorial_M, (NULL));

  /* external inputs */
  Factorial_U.In1 = 0.0;

  /* external outputs */
  Factorial_Y.Out1 = 0.0;
}

/* Model terminate function */
void Factorial_terminate(void)
{
  /* (no terminate code required) */
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
