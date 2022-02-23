/*
 * File: conditional.h
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

#ifndef RTW_HEADER_conditional_h_
#define RTW_HEADER_conditional_h_
#include <stddef.h>
#ifndef conditional_COMMON_INCLUDES_
# define conditional_COMMON_INCLUDES_
#include "rtwtypes.h"
#endif                                 /* conditional_COMMON_INCLUDES_ */

#include "conditional_types.h"

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
} ExtU_conditional_T;

/* External outputs (root outports fed by signals with auto storage) */
typedef struct {
  real_T Out1;                         /* '<Root>/Out1' */
} ExtY_conditional_T;

/* Real-time Model Data Structure */
struct tag_RTM_conditional_T {
  const char_T * volatile errorStatus;
};

/* External inputs (root inport signals with auto storage) */
extern ExtU_conditional_T conditional_U;

/* External outputs (root outports fed by signals with auto storage) */
extern ExtY_conditional_T conditional_Y;

/* Model entry point functions */
extern void conditional_initialize(void);
extern void conditional_step(void);
extern void conditional_terminate(void);

/* Real-time Model object */
extern RT_MODEL_conditional_T *const conditional_M;

/*-
 * These blocks were eliminated from the model due to optimizations:
 *
 * Block '<Root>/Display' : Unused code path elimination
 * Block '<Root>/If2' : Unused code path elimination
 */

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
 * '<Root>' : 'conditional'
 * '<S1>'   : 'conditional/If Action Subsystem'
 * '<S2>'   : 'conditional/If Action Subsystem1'
 * '<S3>'   : 'conditional/If Action Subsystem2'
 * '<S4>'   : 'conditional/If Action Subsystem3'
 * '<S5>'   : 'conditional/If Action Subsystem4'
 */
#endif                                 /* RTW_HEADER_conditional_h_ */

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
