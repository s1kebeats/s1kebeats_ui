import {
  d as L,
  b as f,
  e as o,
  w as M,
  f as O,
  o as v,
  g as x,
  i as d,
  j as w,
  n as t,
  c as u,
  u as h,
  k as C,
  l as I,
  v as U,
  m as z,
  p as H
} from './vue.esm-bundler-af39f383.js';
import { I as V } from './iconify-c502b4ab.js';
const q = ['disabled'],
  A = {
    class: 'flex grow flex-col items-start justify-center overflow-hidden'
  },
  G = ['autocomplete', 'type', 'name', 'placeholder', 'disabled'],
  J = ['onClick', 'disabled'],
  g = L({
    __name: 'ConfidentialInput',
    props: {
      size: { default: 'md' },
      name: {},
      label: {},
      preset: {},
      disabled: { type: Boolean, default: !1 },
      message: {},
      state: {},
      callback: {},
      debounce: { type: Boolean, default: !1 },
      autocomplete: { default: 'off' },
      icon: { type: Boolean, default: !0 }
    },
    emits: ['updateValue'],
    setup(r, { emit: l }) {
      const a = r,
        n = f(''),
        T = f(null),
        i = f(!1),
        c = f(!1);
      function P() {
        c.value = !c.value;
      }
      const D = o(() => {
          switch (a.state) {
            case 'success':
              return 'text-success-default_strong';
            case 'error':
              return 'text-danger-default_strong';
            default:
              return 'text-grayscale-header';
          }
        }),
        y = o(() => {
          switch (a.size) {
            case 'sm':
              return 'text-[19px]';
            case 'xl':
              return 'text-[24px]';
            default:
              return 'text-[22px]';
          }
        }),
        j = o(() => {
          switch (a.size) {
            case 'sm':
              return 'desktop-text-xs';
            case 'xl':
              return 'desktop-text-md gap-2';
            default:
              return 'desktop-text-sm gap-1';
          }
        }),
        E = o(() => {
          switch (a.state) {
            case 'success':
              return 'text-success-default_strong';
            case 'error':
              return 'text-danger-default_strong';
            default:
              return 'text-grayscale-label';
          }
        }),
        F = o(() => {
          switch (a.size) {
            case 'sm':
              return 'rounded-lg min-h-[48px] px-4 gap-3';
            case 'lg':
              return 'rounded-xl min-h-[56px] px-8 gap-4';
            case 'xl':
              return 'rounded-2xl min-h-[60px] px-8 gap-4';
            default:
              return 'rounded-xl min-h-[52px] px-6 gap-3';
          }
        }),
        $ = o(() => {
          switch (a.state) {
            case 'success':
              return '!outline-success outline outline-[2px] !bg-success-bg';
            case 'error':
              return '!outline-danger outline outline-[2px] !bg-danger-bg';
            default:
              return '';
          }
        }),
        k = o(() => {
          switch (a.state) {
            case 'success':
              return 'text-success-default_strong';
            case 'error':
              return 'text-danger-default_strong';
            default:
              return 'text-grayscale-label';
          }
        });
      let b;
      return (
        M(n, () => {
          if (!a.debounce) {
            l('updateValue', n.value);
            return;
          }
          b && clearTimeout(b),
            (b = setTimeout(() => {
              l('updateValue', n.value);
            }, 500));
        }),
        O(() => {
          n.value = a.preset ? a.preset : '';
        }),
        (e, s) => (
          v(),
          x(
            'div',
            {
              class: t([
                'flex flex-col',
                [j.value, { 'cursor-not-allowed': e.disabled }]
              ]),
              'data-testid': 'confidentialInputContainer'
            },
            [
              d(
                'div',
                {
                  class: t([
                    'flex items-center transition-all',
                    [
                      F.value,
                      $.value,
                      {
                        'opacity-50': e.disabled,
                        'bg-grayscale-bg outline-grayscale-header outline outline-[2px]':
                          i.value,
                        'bg-grayscale-input': !i.value
                      }
                    ]
                  ]),
                  'data-testid': 'presentationalInput',
                  onFocusin: s[2] || (s[2] = (p) => (i.value = !0)),
                  onFocusout: s[3] || (s[3] = (p) => (i.value = !1))
                },
                [
                  e.icon
                    ? (v(),
                      x(
                        'button',
                        {
                          key: 0,
                          'data-testid': 'optionalIconButton',
                          disabled: e.disabled,
                          onClick:
                            s[0] ||
                            (s[0] = w(
                              (p) => (e.callback ? e.callback() : null),
                              ['prevent']
                            )),
                          class: t({
                            'cursor-default': !e.callback,
                            'cursor-not-allowed': e.disabled
                          })
                        },
                        [
                          u(
                            h(V),
                            {
                              'data-testid': 'optionalIcon',
                              icon: 'material-symbols:lock',
                              class: t([
                                'transition-all',
                                [
                                  y.value,
                                  k.value,
                                  {
                                    '!text-black': i.value,
                                    'hover:text-black': e.callback
                                  }
                                ]
                              ])
                            },
                            null,
                            8,
                            ['class']
                          )
                        ],
                        10,
                        q
                      ))
                    : C('', !0),
                  d('div', A, [
                    I(
                      d(
                        'span',
                        {
                          'data-testid': 'upperLabel',
                          class: t(['w-full desktop-text-xs truncate', E.value])
                        },
                        z(e.label),
                        3
                      ),
                      [[U, n.value]]
                    ),
                    I(
                      d(
                        'input',
                        {
                          autocomplete: e.autocomplete,
                          'data-testid': 'confidentialInput',
                          type: c.value ? 'text' : 'password',
                          name: e.name,
                          ref_key: 'confidentialInput',
                          ref: T,
                          placeholder: e.label,
                          class: t([
                            'bg-transparent w-full truncate focus:outline-none text-grayscale-header placeholder:text-grayscale-label placeholder:truncate',
                            { 'cursor-not-allowed': e.disabled }
                          ]),
                          'onUpdate:modelValue':
                            s[1] || (s[1] = (p) => (n.value = p)),
                          disabled: e.disabled
                        },
                        null,
                        10,
                        G
                      ),
                      [[H, n.value, void 0, { trim: !0 }]]
                    )
                  ]),
                  d(
                    'button',
                    {
                      class: t({
                        'w-[19px]': e.size === 'sm',
                        'w-[22px]': e.size === 'md' || e.size === 'lg',
                        'w-[24px]': e.size === 'xl',
                        'cursor-not-allowed': e.disabled
                      }),
                      'data-testid': 'toggleValueButton',
                      onClick: w(P, ['prevent']),
                      disabled: e.disabled
                    },
                    [
                      u(
                        h(V),
                        {
                          'data-testid': 'toggleValueButtonIcon',
                          icon: c.value
                            ? 'material-symbols:visibility-outline-rounded'
                            : 'material-symbols:visibility-off-outline-rounded',
                          class: t([
                            'transition-all hover:text-black',
                            [
                              y.value,
                              k.value,
                              {
                                '!text-black': i.value,
                                'hover:text-black': e.callback
                              }
                            ]
                          ])
                        },
                        null,
                        8,
                        ['icon', 'class']
                      )
                    ],
                    10,
                    J
                  )
                ],
                34
              ),
              e.message
                ? (v(),
                  x(
                    'span',
                    { key: 0, 'data-testid': 'messageHint', class: t(D.value) },
                    z(e.message),
                    3
                  ))
                : C('', !0)
            ],
            2
          )
        )
      );
    }
  });
g.__docgenInfo = {
  exportName: 'default',
  displayName: 'ConfidentialInput',
  description: '',
  tags: {},
  props: [
    { name: 'size', defaultValue: { func: !1, value: "'md'" } },
    { name: 'disabled', defaultValue: { func: !1, value: 'false' } },
    { name: 'debounce', defaultValue: { func: !1, value: 'false' } },
    { name: 'icon', defaultValue: { func: !1, value: 'true' } },
    { name: 'autocomplete', defaultValue: { func: !1, value: "'off'" } }
  ],
  events: [{ name: 'updateValue', type: { names: ['string'] } }],
  sourceFiles: [
    'C:/Users/datse/Documents/Code/NewProjects/s1kebeats/s1kebeats_ui/src/components/ConfidentialInput/ConfidentialInput.vue'
  ]
};
const X = { component: g },
  K = [null, 'success', 'error'],
  Q = ['sm', 'md', 'lg', 'xl'],
  m = () =>
    u('div', { class: 'inline-grid grid-cols-2 gap-5' }, [
      K.map((r) =>
        u('div', { class: 'flex flex-col gap-5 items-start' }, [
          Q.map((l) =>
            u('div', { class: 'flex gap-5' }, [
              u(
                g,
                {
                  name: 'input',
                  label: 'Type in your password',
                  state: r,
                  size: l,
                  key: l + r
                },
                null
              ),
              u(
                g,
                {
                  name: 'input',
                  label: 'Type in your password',
                  icon: !1,
                  state: r,
                  size: l,
                  key: l + r
                },
                null
              )
            ])
          )
        ])
      )
    ]);
var B, S, N;
m.parameters = {
  ...m.parameters,
  docs: {
    ...((B = m.parameters) == null ? void 0 : B.docs),
    source: {
      originalSource: `() => <div class="inline-grid grid-cols-2 gap-5">\r
    {confidentialInputStates.map(state => {
    return <div class="flex flex-col gap-5 items-start">\r
          {confidentialInputSizes.map(size => {
        return <div class="flex gap-5">\r
                <ConfidentialInput name="input" label="Type in your password" state={state} size={size} key={size! + state!} />\r
                <ConfidentialInput name="input" label="Type in your password" icon={false} state={state} size={size} key={size! + state!} />\r
              </div>;
      })}\r
        </div>;
  })}\r
  </div>`,
      ...((N = (S = m.parameters) == null ? void 0 : S.docs) == null
        ? void 0
        : N.source)
    }
  }
};
const Y = ['Presentation'];
export { m as Presentation, Y as __namedExportsOrder, X as default };
//# sourceMappingURL=ConfidentialInput.stories-a97612e0.js.map
