/*
 * File: untitled.c
 *
 * Code generated for Simulink model 'untitled'.
 *
 * Model version                  : 1.0
 * Simulink Coder version         : 8.10 (R2016a) 10-Feb-2016
 * C/C++ source code generated on : Wed Feb 23 18:45:04 2022
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: Intel->x86-64 (Windows64)
 * Code generation objectives: Unspecified
 * Validation result: Not run
 */

#include "untitled.h"
#include "untitled_private.h"

/* External inputs (root inport signals with auto storage) */
ExtU_untitled_T untitled_U;

/* External outputs (root outports fed by signals with auto storage) */
ExtY_untitled_T untitled_Y;

/* Real-time model */
RT_MODEL_untitled_T untitled_M_;
RT_MODEL_untitled_T *const untitled_M = &untitled_M_;

/* Model step function */
void untitled_step(void)
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
    if (untitled_U.In1 < 0.0) {
      tmp = ceil(untitled_U.In1);
    } else {
      tmp = floor(untitled_U.In1);
    }

    if (rtIsNaN(tmp) || rtIsInf(tmp)) {
      tmp = 0.0;
    } else {
      tmp = fmod(tmp, 4.294967296E+9);
    }

    if (s1_iter <= (tmp < 0.0 ? -(int32_T)(uint32_T)-tmp : (int32_T)(uint32_T)
                    tmp)) {
      untitled_Y.Out1 = (real_T)s1_iter * UnitDelay_DSTATE;
      UnitDelay_DSTATE = untitled_Y.Out1;
      s1_iter++;
    } else {
      exitg1 = 1;
    }
  } while (exitg1 == 0);
}

/* Model initialize function */
void untitled_initialize(void)
{
  /* Registration code */

  /* initialize non-finites */
  rt_InitInfAndNaN(sizeof(real_T));

  /* initialize error status */
  rtmSetErrorStatus(untitled_M, (NULL));

  /* external inputs */
  untitled_U.In1 = 0.0;

  /* external outputs */
  untitled_Y.Out1 = 0.0;
}

/* Model terminate function */
void untitled_terminate(void)
{
  /* (no terminate code required) */
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
