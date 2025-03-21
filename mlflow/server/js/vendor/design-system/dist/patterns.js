import { css, createElement } from '@emotion/react';
import React__default, { useMemo, useState, useCallback } from 'react';
import _compact from 'lodash/compact';
import { jsxs, Fragment, jsx } from '@emotion/react/jsx-runtime';
import { T as Tooltip, S as Spacer, I as InfoIcon, M as Modal, f as Sidebar, g as useMediaQuery, L as ListIcon } from './Tooltip-BVYL7lTx.js';
import { a as useDesignSystemTheme, Z as getShadowScrollStyles, B as Button, i as addDebugOutlineIfEnabled, r as Typography, C as CloseIcon, m as Root$1, T as Trigger$1, n as Content$1 } from './Typography-EFtM7f6H.js';
import _pick from 'lodash/pick';
import _isUndefined from 'lodash/isUndefined';
import { S as Stepper } from './Stepper-BECCOIVo.js';
import _noop from 'lodash/noop';
import 'antd';
import 'react-resizable';
import '@radix-ui/react-tooltip';
import '@radix-ui/react-popover';
import '@ant-design/icons';
import 'lodash/isNil';
import 'lodash/endsWith';
import 'lodash/isBoolean';
import 'lodash/isNumber';
import 'lodash/isString';
import 'lodash/mapValues';
import 'lodash/memoize';
import '@emotion/unitless';
import 'lodash/uniqueId';

function useStepperStepsFromWizardSteps(wizardSteps, currentStepIdx, hideDescriptionForFutureSteps) {
  return useMemo(() => wizardSteps.map((wizardStep, stepIdx) => ({
    ..._pick(wizardStep, ['title', 'status']),
    description: hideDescriptionForFutureSteps && !(stepIdx <= currentStepIdx || wizardStep.status === 'completed' || wizardStep.status === 'error' || wizardStep.status === 'warning') ? undefined : wizardStep.description,
    additionalVerticalContent: wizardStep.additionalHorizontalLayoutStepContent,
    clickEnabled: _isUndefined(wizardStep.clickEnabled) ? isWizardStepEnabled(wizardSteps, stepIdx, currentStepIdx, wizardStep.status) : wizardStep.clickEnabled
  })), [currentStepIdx, hideDescriptionForFutureSteps, wizardSteps]);
}
function isWizardStepEnabled(steps, stepIdx, currentStepIdx, status) {
  if (stepIdx < currentStepIdx || status === 'completed' || status === 'error' || status === 'warning') {
    return true;
  }

  // if every step before stepIdx is completed then the step is enabled
  return steps.slice(0, stepIdx).every(step => step.status === 'completed');
}

function HorizontalWizardStepsContent(_ref) {
  var _wizardSteps$currentS, _wizardSteps$currentS2;
  let {
    steps: wizardSteps,
    currentStepIndex,
    localizeStepNumber,
    enableClickingToSteps,
    goToStep,
    hideDescriptionForFutureSteps = false
  } = _ref;
  const {
    theme
  } = useDesignSystemTheme();
  const stepperSteps = useStepperStepsFromWizardSteps(wizardSteps, currentStepIndex, hideDescriptionForFutureSteps);
  const expandContentToFullHeight = (_wizardSteps$currentS = wizardSteps[currentStepIndex].expandContentToFullHeight) !== null && _wizardSteps$currentS !== void 0 ? _wizardSteps$currentS : true;
  const disableDefaultScrollBehavior = (_wizardSteps$currentS2 = wizardSteps[currentStepIndex].disableDefaultScrollBehavior) !== null && _wizardSteps$currentS2 !== void 0 ? _wizardSteps$currentS2 : false;
  return jsxs(Fragment, {
    children: [jsx(Stepper, {
      currentStepIndex: currentStepIndex,
      direction: "horizontal",
      localizeStepNumber: localizeStepNumber,
      steps: stepperSteps,
      responsive: false,
      onStepClicked: enableClickingToSteps ? goToStep : undefined
    }), jsx("div", {
      css: /*#__PURE__*/css({
        marginTop: theme.spacing.md,
        flexGrow: expandContentToFullHeight ? 1 : undefined,
        overflowY: disableDefaultScrollBehavior ? 'hidden' : 'auto',
        ...(!disableDefaultScrollBehavior ? getShadowScrollStyles(theme) : {})
      }, process.env.NODE_ENV === "production" ? "" : ";label:HorizontalWizardStepsContent;"),
      children: wizardSteps[currentStepIndex].content
    })]
  });
}

/* eslint-disable react/no-unused-prop-types */
// eslint doesn't like passing props as object through to a function
// disabling to avoid a bunch of duplicate code.
function _EMOTION_STRINGIFIED_CSS_ERROR__$2() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
var _ref2$1 = process.env.NODE_ENV === "production" ? {
  name: "1ff36h2",
  styles: "flex-grow:1"
} : {
  name: "1vyl5dv-getWizardFooterButtons",
  styles: "flex-grow:1;label:getWizardFooterButtons;",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$2
};
// Buttons are returned in order with primary button last
function getWizardFooterButtons(_ref) {
  var _extraFooterButtonsRi;
  let {
    title,
    goToNextStepOrDone,
    isLastStep,
    currentStepIndex,
    goToPreviousStep,
    busyValidatingNextStep,
    nextButtonDisabled,
    nextButtonLoading,
    nextButtonContentOverride,
    previousButtonContentOverride,
    previousStepButtonHidden,
    previousButtonDisabled,
    previousButtonLoading,
    cancelButtonContent,
    cancelStepButtonHidden,
    nextButtonContent,
    previousButtonContent,
    doneButtonContent,
    extraFooterButtonsLeft,
    extraFooterButtonsRight,
    onCancel,
    moveCancelToOtherSide,
    componentId,
    tooltipContent
  } = _ref;
  return _compact([!cancelStepButtonHidden && (moveCancelToOtherSide ? jsx("div", {
    css: _ref2$1,
    children: jsx(CancelButton, {
      onCancel: onCancel,
      cancelButtonContent: cancelButtonContent,
      componentId: componentId ? `${componentId}.cancel` : undefined
    })
  }, "cancel") : jsx(CancelButton, {
    onCancel: onCancel,
    cancelButtonContent: cancelButtonContent,
    componentId: componentId ? `${componentId}.cancel` : undefined
  }, "cancel")), currentStepIndex > 0 && !previousStepButtonHidden && jsx(Button, {
    onClick: goToPreviousStep,
    type: "tertiary",
    disabled: previousButtonDisabled,
    loading: previousButtonLoading,
    componentId: componentId ? `${componentId}.previous` : 'dubois-wizard-footer-previous',
    children: previousButtonContentOverride ? previousButtonContentOverride : previousButtonContent
  }, "previous"), extraFooterButtonsLeft && extraFooterButtonsLeft.map((buttonProps, index) => createElement(ButtonWithTooltip, {
    ...buttonProps,
    type: undefined,
    key: `extra-left-${index}`
  })), jsx(ButtonWithTooltip, {
    onClick: goToNextStepOrDone,
    disabled: nextButtonDisabled,
    tooltipContent: tooltipContent,
    loading: nextButtonLoading || busyValidatingNextStep,
    type: ((_extraFooterButtonsRi = extraFooterButtonsRight === null || extraFooterButtonsRight === void 0 ? void 0 : extraFooterButtonsRight.length) !== null && _extraFooterButtonsRi !== void 0 ? _extraFooterButtonsRi : 0) > 0 ? undefined : 'primary',
    componentId: componentId ? `${componentId}.next` : 'dubois-wizard-footer-next',
    children: nextButtonContentOverride ? nextButtonContentOverride : isLastStep ? doneButtonContent : nextButtonContent
  }, "next"), extraFooterButtonsRight && extraFooterButtonsRight.map((buttonProps, index) => createElement(ButtonWithTooltip, {
    ...buttonProps,
    type: index === extraFooterButtonsRight.length - 1 ? 'primary' : undefined,
    key: `extra-right-${index}`
  }))]);
}
function CancelButton(_ref3) {
  let {
    onCancel,
    cancelButtonContent,
    componentId
  } = _ref3;
  return jsx(Button, {
    onClick: onCancel,
    type: "tertiary",
    componentId: componentId !== null && componentId !== void 0 ? componentId : 'dubois-wizard-footer-cancel',
    children: cancelButtonContent
  }, "cancel");
}
function ButtonWithTooltip(_ref4) {
  let {
    tooltipContent,
    disabled,
    children,
    ...props
  } = _ref4;
  return tooltipContent ? jsx(Tooltip, {
    componentId: "dubois-wizard-footer-tooltip",
    content: tooltipContent,
    children: jsx(Button, {
      ...props,
      disabled: disabled,
      children: children
    })
  }) : jsx(Button, {
    ...props,
    disabled: disabled,
    children: children
  });
}

function HorizontalWizardContent(_ref) {
  let {
    width,
    height,
    steps,
    currentStepIndex,
    localizeStepNumber,
    onStepsChange,
    enableClickingToSteps,
    hideDescriptionForFutureSteps,
    ...footerProps
  } = _ref;
  return jsxs("div", {
    css: /*#__PURE__*/css({
      width,
      height,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start'
    }, process.env.NODE_ENV === "production" ? "" : ";label:HorizontalWizardContent;"),
    ...addDebugOutlineIfEnabled(),
    children: [jsx(HorizontalWizardStepsContent, {
      steps: steps,
      currentStepIndex: currentStepIndex,
      localizeStepNumber: localizeStepNumber,
      enableClickingToSteps: Boolean(enableClickingToSteps),
      goToStep: footerProps.goToStep,
      hideDescriptionForFutureSteps: hideDescriptionForFutureSteps
    }), jsx(Spacer, {
      size: "lg"
    }), jsx(WizardFooter, {
      currentStepIndex: currentStepIndex,
      ...steps[currentStepIndex],
      ...footerProps,
      moveCancelToOtherSide: true
    })]
  });
}
function WizardFooter(props) {
  const {
    theme
  } = useDesignSystemTheme();
  return jsx("div", {
    css: /*#__PURE__*/css({
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      columnGap: theme.spacing.sm,
      paddingTop: theme.spacing.md,
      paddingBottom: theme.spacing.md,
      borderTop: `1px solid ${theme.colors.border}`
    }, process.env.NODE_ENV === "production" ? "" : ";label:WizardFooter;"),
    children: getWizardFooterButtons(props)
  });
}

function _EMOTION_STRINGIFIED_CSS_ERROR__$1() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
function Root(_ref) {
  let {
    children,
    initialContentId
  } = _ref;
  const [currentContentId, setCurrentContentId] = useState(initialContentId);
  return jsx(DocumentationSideBarContext.Provider, {
    value: useMemo(() => ({
      currentContentId,
      setCurrentContentId
    }), [currentContentId, setCurrentContentId]),
    children: children
  });
}
const DocumentationSideBarContext = /*#__PURE__*/React__default.createContext({
  currentContentId: undefined,
  setCurrentContentId: _noop
});
const useDocumentationSidebarContext = () => {
  const context = React__default.useContext(DocumentationSideBarContext);
  return context;
};
var _ref3 = process.env.NODE_ENV === "production" ? {
  name: "1b7w9np",
  styles: "border:none;background-color:transparent;padding:0;display:flex;height:var(--spacing-md);align-items:center;cursor:pointer"
} : {
  name: "1q7unyc-Trigger",
  styles: "border:none;background-color:transparent;padding:0;display:flex;height:var(--spacing-md);align-items:center;cursor:pointer;label:Trigger;",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$1
};
function Trigger(_ref2) {
  let {
    contentId,
    label,
    tooltipContent,
    asChild,
    children,
    ...tooltipProps
  } = _ref2;
  const {
    theme
  } = useDesignSystemTheme();
  const {
    setCurrentContentId
  } = useDocumentationSidebarContext();
  const triggerProps = useMemo(() => ({
    onClick: () => setCurrentContentId(contentId),
    [`aria-label`]: label
  }), [contentId, label, setCurrentContentId]);
  const renderAsChild = asChild && /*#__PURE__*/React__default.isValidElement(children);
  return jsx(Tooltip, {
    ...tooltipProps,
    content: tooltipContent,
    children: renderAsChild ? (/*#__PURE__*/React__default.cloneElement(children, triggerProps)) : jsx("button", {
      css: _ref3,
      ...triggerProps,
      children: jsx(InfoIcon, {
        css: /*#__PURE__*/css({
          fontSize: theme.typography.fontSizeSm,
          color: theme.colors.textSecondary
        }, process.env.NODE_ENV === "production" ? "" : ";label:Trigger;")
      })
    })
  });
}
var _ref5 = process.env.NODE_ENV === "production" ? {
  name: "fxdlmq",
  styles: "display:flex;flex-direction:row;justify-content:space-between;align-items:center;width:100%"
} : {
  name: "17fupas-Content",
  styles: "display:flex;flex-direction:row;justify-content:space-between;align-items:center;width:100%;label:Content;",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$1
};
function Content(_ref4) {
  let {
    title,
    modalTitleWhenCompact,
    width,
    children,
    closeLabel,
    displayModalWhenCompact
  } = _ref4;
  const {
    theme
  } = useDesignSystemTheme();
  const {
    currentContentId,
    setCurrentContentId
  } = useDocumentationSidebarContext();
  if (_isUndefined(currentContentId)) {
    return null;
  }
  const content = /*#__PURE__*/React__default.isValidElement(children) ? /*#__PURE__*/React__default.cloneElement(children, {
    contentId: currentContentId
  }) : children;
  if (displayModalWhenCompact) {
    return jsx(Modal, {
      componentId: `documentation-side-bar-compact-modal-${currentContentId}`,
      visible: true,
      size: "wide",
      onOk: () => setCurrentContentId(undefined),
      okText: closeLabel,
      okButtonProps: {
        type: undefined
      },
      onCancel: () => setCurrentContentId(undefined),
      title: modalTitleWhenCompact !== null && modalTitleWhenCompact !== void 0 ? modalTitleWhenCompact : title,
      children: content
    });
  }
  return jsx(Sidebar, {
    position: "right",
    dangerouslyAppendEmotionCSS: {
      border: 'none'
    },
    children: jsx(Sidebar.Content, {
      componentId: `documentation-side-bar-content-${currentContentId}`,
      openPanelId: 0,
      closable: true,
      disableResize: true,
      enableCompact: true,
      width: width,
      children: jsx(Sidebar.Panel, {
        panelId: 0,
        children: jsxs("div", {
          css: /*#__PURE__*/css({
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            rowGap: theme.spacing.md,
            borderRadius: theme.legacyBorders.borderRadiusLg,
            border: `1px solid ${theme.colors.backgroundSecondary}`,
            padding: `${theme.spacing.md}px ${theme.spacing.lg}px`,
            backgroundColor: theme.colors.backgroundSecondary
          }, process.env.NODE_ENV === "production" ? "" : ";label:Content;"),
          children: [jsxs("div", {
            css: _ref5,
            children: [jsx(Typography.Text, {
              color: "secondary",
              children: title
            }), jsx(Button, {
              "aria-label": closeLabel,
              icon: jsx(CloseIcon, {}),
              componentId: `documentation-side-bar-close-${currentContentId}`,
              onClick: () => setCurrentContentId(undefined)
            })]
          }), content]
        })
      })
    })
  });
}

var DocumentationSidebar = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Content: Content,
  Root: Root,
  Trigger: Trigger,
  useDocumentationSidebarContext: useDocumentationSidebarContext
});

const SMALL_FIXED_VERTICAL_STEPPER_WIDTH = 240;
const FIXED_VERTICAL_STEPPER_WIDTH = 280;
const MAX_VERTICAL_WIZARD_CONTENT_WIDTH = 920;
const DOCUMENTATION_SIDEBAR_WIDTH = 400;
const EXTRA_COMPACT_BUTTON_HEIGHT = 32 + 24; // button height + gap

function VerticalWizardContent(_ref) {
  var _wizardSteps$currentS, _wizardSteps$currentS2;
  let {
    width,
    height,
    steps: wizardSteps,
    currentStepIndex,
    localizeStepNumber,
    onStepsChange,
    title,
    padding,
    verticalCompactButtonContent,
    enableClickingToSteps,
    verticalDocumentationSidebarConfig,
    hideDescriptionForFutureSteps = false,
    contentMaxWidth,
    ...footerProps
  } = _ref;
  const {
    theme
  } = useDesignSystemTheme();
  const stepperSteps = useStepperStepsFromWizardSteps(wizardSteps, currentStepIndex, hideDescriptionForFutureSteps);
  const expandContentToFullHeight = (_wizardSteps$currentS = wizardSteps[currentStepIndex].expandContentToFullHeight) !== null && _wizardSteps$currentS !== void 0 ? _wizardSteps$currentS : true;
  const disableDefaultScrollBehavior = (_wizardSteps$currentS2 = wizardSteps[currentStepIndex].disableDefaultScrollBehavior) !== null && _wizardSteps$currentS2 !== void 0 ? _wizardSteps$currentS2 : false;
  const displayDocumentationSideBar = Boolean(verticalDocumentationSidebarConfig);
  const Wrapper = displayDocumentationSideBar ? Root : React__default.Fragment;
  const displayCompactStepper = useMediaQuery({
    query: `(max-width: ${theme.responsive.breakpoints.lg}px)`
  }) && Boolean(verticalCompactButtonContent);
  const displayCompactSidebar = useMediaQuery({
    query: `(max-width: ${theme.responsive.breakpoints.xxl}px)`
  });
  return jsx(Wrapper, {
    initialContentId: verticalDocumentationSidebarConfig === null || verticalDocumentationSidebarConfig === void 0 ? void 0 : verticalDocumentationSidebarConfig.initialContentId,
    children: jsxs("div", {
      css: /*#__PURE__*/css({
        width,
        height: expandContentToFullHeight ? height : 'fit-content',
        maxHeight: '100%',
        display: 'flex',
        flexDirection: displayCompactStepper ? 'column' : 'row',
        gap: theme.spacing.lg,
        justifyContent: 'center'
      }, process.env.NODE_ENV === "production" ? "" : ";label:VerticalWizardContent;"),
      ...addDebugOutlineIfEnabled(),
      children: [!displayCompactStepper && jsxs("div", {
        css: /*#__PURE__*/css({
          display: 'flex',
          flexDirection: 'column',
          flexShrink: 0,
          rowGap: theme.spacing.lg,
          paddingTop: theme.spacing.lg,
          paddingBottom: theme.spacing.lg,
          height: 'fit-content',
          width: SMALL_FIXED_VERTICAL_STEPPER_WIDTH,
          [`@media (min-width: ${theme.responsive.breakpoints.xl}px)`]: {
            width: FIXED_VERTICAL_STEPPER_WIDTH
          },
          overflowX: 'hidden'
        }, process.env.NODE_ENV === "production" ? "" : ";label:VerticalWizardContent;"),
        children: [title, jsx(Stepper, {
          currentStepIndex: currentStepIndex,
          direction: "vertical",
          localizeStepNumber: localizeStepNumber,
          steps: stepperSteps,
          responsive: false,
          onStepClicked: enableClickingToSteps ? footerProps.goToStep : undefined
        })]
      }), displayCompactStepper && jsxs(Root$1, {
        componentId: "codegen_design-system_src_~patterns_wizard_verticalwizardcontent.tsx_93",
        children: [jsx(Trigger$1, {
          asChild: true,
          children: jsx("div", {
            children: jsx(Button, {
              icon: jsx(ListIcon, {}),
              componentId: "dubois-wizard-vertical-compact-show-stepper-popover",
              children: verticalCompactButtonContent === null || verticalCompactButtonContent === void 0 ? void 0 : verticalCompactButtonContent(currentStepIndex, stepperSteps.length)
            })
          })
        }), jsx(Content$1, {
          align: "start",
          side: "bottom",
          css: /*#__PURE__*/css({
            padding: theme.spacing.md
          }, process.env.NODE_ENV === "production" ? "" : ";label:VerticalWizardContent;"),
          children: jsx(Stepper, {
            currentStepIndex: currentStepIndex,
            direction: "vertical",
            localizeStepNumber: localizeStepNumber,
            steps: stepperSteps,
            responsive: false,
            onStepClicked: enableClickingToSteps ? footerProps.goToStep : undefined
          })
        })]
      }), jsxs("div", {
        css: /*#__PURE__*/css({
          display: 'flex',
          flexDirection: 'column',
          columnGap: theme.spacing.lg,
          border: `1px solid ${theme.colors.border}`,
          borderRadius: theme.legacyBorders.borderRadiusLg,
          flexGrow: 1,
          padding: padding !== null && padding !== void 0 ? padding : theme.spacing.lg,
          height: displayCompactStepper ? `calc(100% - ${EXTRA_COMPACT_BUTTON_HEIGHT}px)` : '100%',
          maxWidth: contentMaxWidth !== null && contentMaxWidth !== void 0 ? contentMaxWidth : MAX_VERTICAL_WIZARD_CONTENT_WIDTH
        }, process.env.NODE_ENV === "production" ? "" : ";label:VerticalWizardContent;"),
        children: [jsx("div", {
          css: /*#__PURE__*/css({
            flexGrow: expandContentToFullHeight ? 1 : undefined,
            overflowY: disableDefaultScrollBehavior ? 'hidden' : 'auto',
            ...(!disableDefaultScrollBehavior ? getShadowScrollStyles(theme) : {}),
            borderRadius: theme.legacyBorders.borderRadiusLg
          }, process.env.NODE_ENV === "production" ? "" : ";label:VerticalWizardContent;"),
          children: wizardSteps[currentStepIndex].content
        }), jsx("div", {
          css: /*#__PURE__*/css({
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            columnGap: theme.spacing.sm,
            ...(padding !== undefined && {
              padding: theme.spacing.lg
            }),
            paddingTop: theme.spacing.md
          }, process.env.NODE_ENV === "production" ? "" : ";label:VerticalWizardContent;"),
          children: getWizardFooterButtons({
            currentStepIndex: currentStepIndex,
            ...wizardSteps[currentStepIndex],
            ...footerProps,
            moveCancelToOtherSide: true
          })
        })]
      }), displayDocumentationSideBar && verticalDocumentationSidebarConfig && jsx(Content, {
        width: displayCompactSidebar ? undefined : DOCUMENTATION_SIDEBAR_WIDTH,
        title: verticalDocumentationSidebarConfig.title,
        modalTitleWhenCompact: verticalDocumentationSidebarConfig.modalTitleWhenCompact,
        closeLabel: verticalDocumentationSidebarConfig.closeLabel,
        displayModalWhenCompact: displayCompactSidebar,
        children: verticalDocumentationSidebarConfig.content
      })]
    })
  });
}

function useWizardCurrentStep(_ref) {
  let {
    currentStepIndex,
    setCurrentStepIndex,
    totalSteps,
    onValidateStepChange,
    onStepChanged
  } = _ref;
  const [busyValidatingNextStep, setBusyValidatingNextStep] = useState(false);
  const isLastStep = useMemo(() => currentStepIndex === totalSteps - 1, [currentStepIndex, totalSteps]);
  const onStepsChange = useCallback(async function (step) {
    let completed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    if (!completed && step === currentStepIndex) return;
    setCurrentStepIndex(step);
    onStepChanged({
      step,
      completed
    });
  }, [currentStepIndex, onStepChanged, setCurrentStepIndex]);
  const goToNextStepOrDone = useCallback(async () => {
    if (onValidateStepChange) {
      setBusyValidatingNextStep(true);
      try {
        const approvedStepChange = await onValidateStepChange(currentStepIndex);
        if (!approvedStepChange) {
          return;
        }
      } finally {
        setBusyValidatingNextStep(false);
      }
    }
    onStepsChange(Math.min(currentStepIndex + 1, totalSteps - 1), isLastStep);
  }, [currentStepIndex, isLastStep, onStepsChange, onValidateStepChange, totalSteps]);
  const goToPreviousStep = useCallback(() => {
    if (currentStepIndex > 0) {
      onStepsChange(currentStepIndex - 1);
    }
  }, [currentStepIndex, onStepsChange]);
  const goToStep = useCallback(step => {
    if (step > -1 && step < totalSteps) {
      onStepsChange(step);
    }
  }, [onStepsChange, totalSteps]);
  return {
    busyValidatingNextStep,
    isLastStep,
    onStepsChange,
    goToNextStepOrDone,
    goToPreviousStep,
    goToStep
  };
}

function Wizard(_ref) {
  let {
    steps,
    onStepChanged,
    onValidateStepChange,
    initialStep,
    ...props
  } = _ref;
  const [currentStepIndex, setCurrentStepIndex] = useState(initialStep !== null && initialStep !== void 0 ? initialStep : 0);
  const currentStepProps = useWizardCurrentStep({
    currentStepIndex,
    setCurrentStepIndex,
    totalSteps: steps.length,
    onStepChanged,
    onValidateStepChange
  });
  return jsx(WizardControlled, {
    ...currentStepProps,
    currentStepIndex: currentStepIndex,
    initialStep: initialStep,
    steps: steps,
    onStepChanged: onStepChanged,
    ...props
  });
}
function WizardControlled(_ref2) {
  let {
    initialStep = 0,
    layout = 'vertical',
    width = '100%',
    height = '100%',
    steps,
    title,
    ...restOfProps
  } = _ref2;
  if (steps.length === 0 || !_isUndefined(initialStep) && (initialStep < 0 || initialStep >= steps.length)) {
    return null;
  }
  if (layout === 'vertical') {
    return jsx(VerticalWizardContent, {
      width: width,
      height: height,
      steps: steps,
      title: title,
      ...restOfProps
    });
  }
  return jsx(HorizontalWizardContent, {
    width: width,
    height: height,
    steps: steps,
    ...restOfProps
  });
}

function WizardModal(_ref) {
  let {
    onStepChanged,
    onCancel,
    initialStep,
    steps,
    onModalClose,
    localizeStepNumber,
    cancelButtonContent,
    nextButtonContent,
    previousButtonContent,
    doneButtonContent,
    enableClickingToSteps,
    ...modalProps
  } = _ref;
  const [currentStepIndex, setCurrentStepIndex] = useState(initialStep !== null && initialStep !== void 0 ? initialStep : 0);
  const {
    onStepsChange,
    isLastStep,
    ...footerActions
  } = useWizardCurrentStep({
    currentStepIndex,
    setCurrentStepIndex,
    totalSteps: steps.length,
    onStepChanged
  });
  if (steps.length === 0 || !_isUndefined(initialStep) && (initialStep < 0 || initialStep >= steps.length)) {
    return null;
  }
  const footerButtons = getWizardFooterButtons({
    onCancel,
    isLastStep,
    currentStepIndex,
    doneButtonContent,
    previousButtonContent,
    nextButtonContent,
    cancelButtonContent,
    ...footerActions,
    ...steps[currentStepIndex]
  });
  return jsx(Modal, {
    ...modalProps,
    onCancel: onModalClose,
    size: "wide",
    footer: footerButtons,
    children: jsx(HorizontalWizardStepsContent, {
      steps: steps,
      currentStepIndex: currentStepIndex,
      localizeStepNumber: localizeStepNumber,
      enableClickingToSteps: Boolean(enableClickingToSteps),
      goToStep: footerActions.goToStep
    })
  });
}

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
var _ref2 = process.env.NODE_ENV === "production" ? {
  name: "13ku56z",
  styles: "display:flex;flex-direction:column;height:100%"
} : {
  name: "hucxjd-WizardStepContentWrapper",
  styles: "display:flex;flex-direction:column;height:100%;label:WizardStepContentWrapper;",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};
function WizardStepContentWrapper(_ref) {
  let {
    header,
    title,
    description,
    children
  } = _ref;
  const {
    theme
  } = useDesignSystemTheme();
  return jsxs("div", {
    css: _ref2,
    children: [jsxs("div", {
      style: {
        backgroundColor: theme.colors.backgroundSecondary,
        padding: theme.spacing.lg,
        display: 'flex',
        flexDirection: 'column',
        borderTopLeftRadius: theme.legacyBorders.borderRadiusLg,
        borderTopRightRadius: theme.legacyBorders.borderRadiusLg
      },
      children: [jsx(Typography.Text, {
        size: "sm",
        style: {
          fontWeight: 500
        },
        children: header
      }), jsx(Typography.Title, {
        withoutMargins: true,
        style: {
          paddingTop: theme.spacing.lg
        },
        level: 3,
        children: title
      }), jsx(Typography.Text, {
        color: "secondary",
        children: description
      })]
    }), jsx("div", {
      css: /*#__PURE__*/css({
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        padding: `${theme.spacing.lg}px ${theme.spacing.lg}px 0`,
        overflowY: 'auto',
        ...getShadowScrollStyles(theme)
      }, process.env.NODE_ENV === "production" ? "" : ";label:WizardStepContentWrapper;"),
      children: children
    })]
  });
}

const foo = 123;

export { DocumentationSidebar, FIXED_VERTICAL_STEPPER_WIDTH, MAX_VERTICAL_WIZARD_CONTENT_WIDTH, Wizard, WizardControlled, WizardModal, WizardStepContentWrapper, foo, useWizardCurrentStep };
//# sourceMappingURL=patterns.js.map
