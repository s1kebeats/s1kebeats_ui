import {
  d as S,
  b as V,
  e as l,
  f as q,
  o as u,
  g as d,
  n as o,
  m as f,
  k as b,
  i as h,
  c as s,
  s as N,
  T as B,
  q as R,
  l as L,
  v as D,
  u as E
} from './vue.esm-bundler-af39f383.js';
import { I as P } from './iconify-c502b4ab.js';
const _ = ['for'],
  j = ['name', 'checked', 'value', 'disabled'],
  K = ['aria-checked'],
  T = ['for'],
  i = S({
    __name: 'CheckboxInput',
    props: {
      name: {},
      checked: { type: Boolean },
      size: { default: 'md' },
      label: {},
      disabled: { type: Boolean },
      position: { default: 'left' }
    },
    emits: ['updateValue'],
    setup(a, { emit: v }) {
      const n = a,
        t = V(!1);
      function p() {
        (t.value = !t.value), v('updateValue', t.value);
      }
      const y = l(() => {
          switch (n.size) {
            case 'sm':
              return 'w-[27px] h-[27px] rounded-lg';
            case 'lg':
              return 'w-[35px] h-[35px] rounded-lg';
            case 'xl':
              return 'w-[40px] h-[40px] rounded-lg';
            default:
              return 'w-[30px] h-[30px] rounded-lg';
          }
        }),
        C = l(() => {
          switch (n.size) {
            case 'sm':
              return 'text-[21px]';
            case 'lg':
              return 'text-[25px]';
            case 'xl':
              return 'text-[30px]';
            default:
              return 'text-[22px]';
          }
        }),
        z = l(() => {
          switch (n.size) {
            case 'sm':
            case 'md':
              return 'gap-2';
            default:
              return 'gap-3';
          }
        }),
        m = l(() => {
          switch (n.size) {
            case 'sm':
              return 'desktop-text-xs';
            case 'lg':
              return 'desktop-text-sm';
            case 'xl':
              return 'desktop-text-md';
            default:
              return 'desktop-text-sm';
          }
        }),
        I = l(() =>
          t.value
            ? 'bg-primary hover:bg-primary-default_strong'
            : 'bg-grayscale-line hover:bg-grayscale-placehold'
        );
      return (
        q(() => {
          t.value = n.checked ? n.checked : !1;
        }),
        (e, r) => (
          u(),
          d(
            'div',
            { class: o(['flex items-center', [z.value]]) },
            [
              e.label && e.position === 'left'
                ? (u(),
                  d(
                    'label',
                    {
                      key: 0,
                      'data-testid': 'checkboxInputLabelLeft',
                      for: e.name,
                      class: o([m.value])
                    },
                    f(e.label),
                    11,
                    _
                  ))
                : b('', !0),
              h(
                'input',
                {
                  'data-testid': 'realCheckboxInput',
                  name: e.name,
                  type: 'checkbox',
                  checked: e.checked,
                  value: t.value,
                  class: 'hidden',
                  disabled: e.disabled
                },
                null,
                8,
                j
              ),
              h(
                'div',
                {
                  'data-testid': 'customCheckboxInput',
                  tabindex: '0',
                  onClick: r[0] || (r[0] = (w) => (e.disabled ? null : p())),
                  class: o([
                    'flex items-center justify-center transition-all focus:outline-[rgba(0,0,0,.1)] focus:outline focus:outline-[8px] disabled:opacity-50',
                    [y.value, I.value, { 'cursor-not-allowed': e.disabled }]
                  ]),
                  onKeydown:
                    r[1] ||
                    (r[1] = R((w) => (e.disabled ? null : p()), ['enter'])),
                  role: 'checkbox',
                  'aria-checked': t.value
                },
                [
                  s(
                    B,
                    { name: 'fade' },
                    {
                      default: N(() => [
                        L(
                          s(
                            E(P),
                            {
                              'data-testid': 'checkboxIndicator',
                              class: o(['text-grayscale-bg', [C.value]]),
                              icon: 'material-symbols:check-small-rounded'
                            },
                            null,
                            8,
                            ['class']
                          ),
                          [[D, t.value]]
                        )
                      ]),
                      _: 1
                    }
                  )
                ],
                42,
                K
              ),
              e.label && e.position === 'right'
                ? (u(),
                  d(
                    'label',
                    {
                      key: 1,
                      'data-testid': 'checkboxInputLabelRight',
                      for: e.name,
                      class: o([m.value])
                    },
                    f(e.label),
                    11,
                    T
                  ))
                : b('', !0)
            ],
            2
          )
        )
      );
    }
  });
i.__docgenInfo = {
  exportName: 'default',
  displayName: 'CheckboxInput',
  description: '',
  tags: {},
  props: [
    { name: 'name', required: !0, type: { name: 'string' } },
    { name: 'checked', required: !1, type: { name: 'boolean' } },
    {
      name: 'size',
      required: !1,
      type: {
        name: 'union',
        elements: [
          { name: '"sm"' },
          { name: '"md"' },
          { name: '"lg"' },
          { name: '"xl"' }
        ]
      },
      defaultValue: { func: !1, value: "'md'" }
    },
    { name: 'label', required: !1, type: { name: 'string' } },
    { name: 'disabled', required: !1, type: { name: 'boolean' } },
    {
      name: 'position',
      required: !1,
      type: {
        name: 'union',
        elements: [{ name: '"left"' }, { name: '"right"' }]
      },
      defaultValue: { func: !1, value: "'left'" }
    }
  ],
  events: [{ name: 'updateValue', type: { names: ['boolean'] } }],
  sourceFiles: [
    'C:/Users/datse/Documents/Code/NewProjects/s1kebeats/s1kebeats_ui/src/components/CheckboxInput/CheckboxInput.vue'
  ]
};
const U = { component: i },
  $ = ['sm', 'md', 'lg', 'xl'],
  c = () =>
    s('div', { class: 'flex flex-col gap-5 items-start' }, [
      $.map((a) =>
        s('div', { class: 'flex gap-5' }, [
          s(i, { name: 'input', size: a, key: a }, null),
          s(
            i,
            {
              label: 'Receive notifications?',
              name: 'input',
              position: 'right',
              size: a,
              key: a + 'right'
            },
            null
          ),
          s(
            i,
            {
              label: 'Receive notifications?',
              name: 'input',
              position: 'left',
              size: a,
              key: a + 'left'
            },
            null
          )
        ])
      )
    ]);
var k, x, g;
c.parameters = {
  ...c.parameters,
  docs: {
    ...((k = c.parameters) == null ? void 0 : k.docs),
    source: {
      originalSource: `() => <div class="flex flex-col gap-5 items-start">\r
    {checkboxInputSizes.map(size => {
    return <div class="flex gap-5">\r
          <CheckboxInput name="input" size={size} key={size} />\r
\r
          <CheckboxInput label="Receive notifications?" name="input" position="right" size={size} key={size + 'right'} />\r
          <CheckboxInput label="Receive notifications?" name="input" position="left" size={size} key={size + 'left'} />\r
        </div>;
  })}\r
  </div>`,
      ...((g = (x = c.parameters) == null ? void 0 : x.docs) == null
        ? void 0
        : g.source)
    }
  }
};
const A = ['Presentation'];
export { c as Presentation, A as __namedExportsOrder, U as default };
//# sourceMappingURL=CheckboxInput.stories-fa631b5e.js.map
