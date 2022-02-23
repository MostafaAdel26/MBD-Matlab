/*
 * File: conditional.c
 *
 * Code generated for Simulink model 'conditional'.
 *
 * Model version                  : 1.2
 * Simulink Coder version         : 8.10 (R2016a) 10-Feb-2016
 * C/C++ source code generated on : Wed Feb 23 18:36:33 2022
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: Intel->x86-64 (Windows64)
 * Code generation objectives: Unspecified
 * Validation result: Not run
 */

#include "conditional.h"
#include "conditional_private.h"

/* External inputs (root inport signals with auto storage) */
ExtU_conditional_T conditional_U;

/* External outputs (root outports fed by signals with auto storage) */
ExtY_conditional_T conditional_Y;

/* Real-time model */
RT_MODEL_conditional_T conditional_M_;
RT_MODEL_conditional_T *const conditional_M = &conditional_M_;

/* Model step function */
void conditional_step(void)
{
  /* Outport: '<Root>/Out1' */
  conditional_Y.Out1 = 1.0;
}

/* Model initialize function */
void conditional_initialize(void)
{
  /* Registration code */

  /* initialize error status */
  rtmSetErrorStatus(conditional_M, (NULL));

  /* external inputs */
  conditional_U.In1 = 0U;

  /* external outputs */
  conditional_Y.Out1 = 0.0;
}

/* Model terminate function */
void conditional_terminate(void)
{
  /* (no terminate code required) */
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
