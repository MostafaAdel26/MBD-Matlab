/*
 * File: BitWise.c
 *
 * Code generated for Simulink model 'BitWise'.
 *
 * Model version                  : 1.1
 * Simulink Coder version         : 8.10 (R2016a) 10-Feb-2016
 * C/C++ source code generated on : Wed Feb 23 18:07:31 2022
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: Intel->x86-64 (Windows64)
 * Code generation objectives: Unspecified
 * Validation result: Not run
 */

#include "BitWise.h"
#include "BitWise_private.h"

/* External inputs (root inport signals with auto storage) */
ExtU_BitWise_T BitWise_U;

/* External outputs (root outports fed by signals with auto storage) */
ExtY_BitWise_T BitWise_Y;

/* Real-time model */
RT_MODEL_BitWise_T BitWise_M_;
RT_MODEL_BitWise_T *const BitWise_M = &BitWise_M_;

/* Model step function */
void BitWise_step(void)
{
  /* Outport: '<Root>/Out1' incorporates:
   *  Inport: '<Root>/In1'
   *  S-Function (sfix_bitop): '<Root>/Bitwise Operator6'
   */
  BitWise_Y.Out1 = (uint8_T)~BitWise_U.In1;

  /* Outport: '<Root>/Out2' incorporates:
   *  Inport: '<Root>/In1'
   *  Inport: '<Root>/In2'
   *  S-Function (sfix_bitop): '<Root>/Bitwise Operator'
   */
  BitWise_Y.Out2 = (uint8_T)(BitWise_U.In1 & BitWise_U.In2);

  /* Outport: '<Root>/Out3' incorporates:
   *  Inport: '<Root>/In1'
   *  Inport: '<Root>/In2'
   *  S-Function (sfix_bitop): '<Root>/Bitwise Operator1'
   */
  BitWise_Y.Out3 = (uint8_T)(BitWise_U.In1 | BitWise_U.In2);

  /* Outport: '<Root>/Out4' incorporates:
   *  Inport: '<Root>/In1'
   *  Inport: '<Root>/In2'
   *  S-Function (sfix_bitop): '<Root>/Bitwise Operator2'
   */
  BitWise_Y.Out4 = (uint8_T)(BitWise_U.In1 ^ BitWise_U.In2);

  /* Outport: '<Root>/Out5' incorporates:
   *  Inport: '<Root>/In1'
   *  S-Function (sfix_bitop): '<Root>/Bitwise Operator3'
   *  S-Function (sfix_bitop): '<Root>/Bitwise Operator5'
   */
  BitWise_Y.Out5 = (uint8_T)~(uint8_T)(BitWise_U.In1 ^ 217U);

  /* Outport: '<Root>/Out6' incorporates:
   *  Inport: '<Root>/In2'
   *  S-Function (sfix_bitop): '<Root>/Bitwise Operator4'
   */
  BitWise_Y.Out6 = (uint8_T)~BitWise_U.In2;
}

/* Model initialize function */
void BitWise_initialize(void)
{
  /* Registration code */

  /* initialize error status */
  rtmSetErrorStatus(BitWise_M, (NULL));

  /* external inputs */
  (void) memset((void *)&BitWise_U, 0,
                sizeof(ExtU_BitWise_T));

  /* external outputs */
  (void) memset((void *)&BitWise_Y, 0,
                sizeof(ExtY_BitWise_T));
}

/* Model terminate function */
void BitWise_terminate(void)
{
  /* (no terminate code required) */
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
