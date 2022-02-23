/*
 * File: Subsystem.c
 *
 * Code generated for Simulink model 'Subsystem'.
 *
 * Model version                  : 1.3
 * Simulink Coder version         : 8.10 (R2016a) 10-Feb-2016
 * C/C++ source code generated on : Wed Feb 23 18:10:18 2022
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: Intel->x86-64 (Windows64)
 * Code generation objectives: Unspecified
 * Validation result: Not run
 */

#include "Subsystem.h"
#include "Subsystem_private.h"

/* External inputs (root inport signals with auto storage) */
ExtU_Subsystem_T Subsystem_U;

/* External outputs (root outports fed by signals with auto storage) */
ExtY_Subsystem_T Subsystem_Y;

/* Real-time model */
RT_MODEL_Subsystem_T Subsystem_M_;
RT_MODEL_Subsystem_T *const Subsystem_M = &Subsystem_M_;

/* Model step function */
void Subsystem_step(void)
{
  /* Outport: '<Root>/Out1' incorporates:
   *  Inport: '<Root>/In1'
   *  Inport: '<Root>/In2'
   *  Sum: '<S1>/Add'
   */
  Subsystem_Y.Out1 = (uint8_T)((uint32_T)Subsystem_U.In1 + Subsystem_U.In2);

  /* Outport: '<Root>/Out2' incorporates:
   *  Inport: '<Root>/In1'
   *  Inport: '<Root>/In2'
   *  Sum: '<S1>/Subtract'
   */
  Subsystem_Y.Out2 = (uint8_T)(Subsystem_U.In1 - Subsystem_U.In2);

  /* Outport: '<Root>/Out3' incorporates:
   *  Inport: '<Root>/In1'
   *  Inport: '<Root>/In2'
   *  Product: '<S1>/Product'
   */
  Subsystem_Y.Out3 = (uint16_T)((uint32_T)Subsystem_U.In1 * Subsystem_U.In2);

  /* Outport: '<Root>/Out4' incorporates:
   *  Inport: '<Root>/In1'
   *  Inport: '<Root>/In2'
   *  Product: '<S1>/Divide'
   */
  Subsystem_Y.Out4 = (uint8_T)(Subsystem_U.In2 == 0U ? MAX_uint32_T : (uint32_T)
    Subsystem_U.In1 / Subsystem_U.In2);
}

/* Model initialize function */
void Subsystem_initialize(void)
{
  /* Registration code */

  /* initialize error status */
  rtmSetErrorStatus(Subsystem_M, (NULL));

  /* external inputs */
  (void) memset((void *)&Subsystem_U, 0,
                sizeof(ExtU_Subsystem_T));

  /* external outputs */
  (void) memset((void *)&Subsystem_Y, 0,
                sizeof(ExtY_Subsystem_T));
}

/* Model terminate function */
void Subsystem_terminate(void)
{
  /* (no terminate code required) */
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
