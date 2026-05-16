# Z-INDEX SYSTEM

Name your layers. Do not use arbitrary numbers.

```table
--z-base       :   0   (normal document flow)
--z-raised     :  10   (slightly elevated: cards, dropdowns)
--z-overlay    : 100   (drawers, side sheets)
--z-modal      : 200   (dialogs, command palettes)
--z-toast      : 300   (notifications, alerts)
--z-tooltip    : 400   (tooltips, popovers)
--z-max        : 9999  (emergency override — use sparingly)
```

If a component needs a value not on this scale, question the design first.
