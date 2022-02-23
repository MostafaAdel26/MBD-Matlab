/*
 * File: BitWise.h
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

#ifndef RTW_HEADER_BitWise_h_
#define RTW_HEADER_BitWise_h_
#include <stddef.h>
#include <string.h>
#ifndef BitWise_COMMON_INCLUDES_
# define BitWise_COMMON_INCLUDES_
#include "rtwtypes.h"
#endif                                 /* BitWise_COMMON_INCLUDES_ */

#include "BitWise_types.h"

/* Macros for accessing real-time model data structure */
#ifndef rtmGetErrorStatus
# define rtmGetErrorStatus(rtm)        ((rtm)->errorStatus)
#endif

#ifndef rtmSetErrorStatus
# define rtmSetErrorStatus(rtm, val)   ((rtm)->errorStatus = (val))
#endif

/* External inputs (root inport signals with auto storage) */
typedef struct {
  uint8_T In1;                         /* '<Root>/In1' */
  uint8_T In2;                         /* '<Root>/In2' */
} ExtU_BitWise_T;

/* External outputs (root outports fed by signals with auto storage) */
typedef struct {
  uint8_T Out1;                        /* '<Root>/Out1' */
  uint8_T Out2;                        /* '<Root>/Out2' */
  uint8_T Out3;                        /* '<Root>/Out3' */
  uint8_T Out4;                        /* '<Root>/Out4' */
  uint8_T Out5;                        /* '<Root>/Out5' */
  uint8_T Out6;                        /* '<Root>/Out6' */
} ExtY_BitWise_T;

/* Real-time Model Data Structure */
struct tag_RTM_BitWise_T {
  const char_T * volatile errorStatus;
};

/* External inputs (root inport signals with auto storage) */
extern ExtU_BitWise_T BitWise_U;

/* External outputs (root outports fed by signals with auto storage) */
extern ExtY_BitWise_T BitWise_Y;

/* Model entry point functions */
extern void BitWise_initialize(void);
extern void BitWise_step(void);
extern void BitWise_terminate(void);

/* Real-time Model object */
extern RT_MODEL_BitWise_T *const BitWise_M;

/*-
 * The generated code includes comments that allow you to trace directly
 * back to the appropriate location in the model.  The basic format
 * is <system>/block_name, where system is the system number (uniquely
 * assigned by Simulink) and block_name is the name of the block.
 *
 * Use the MATLAB hilite_system command to trace the generated code back
 * to the model.  For example,
 *
 * hilite_system('<S3>')    - opens system 3
 * hilite_system('<S3>/Kp') - opens and selects block Kp which resides in S3
 *
 * Here is the system hierarchy for this model
 *
 * '<Root>' : 'BitWise'
 */
#endif                                 /* RTW_HEADER_BitWise_h_ */

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
