# Wireframes — Hospital Management System

Low-fidelity layout sketches for the main application pages. Focus is on layout and functionality, not styling.

## 1. Login Page

```
 ┌───────────────────────────────┐
 │        Hospital MS Logo        │
 │                                 │
 │   Email    [______________]    │
 │   Password [______________]    │
 │                                 │
 │          [   Login   ]         │
 │                                 │
 │   Forgot Password? (optional)  │
 └───────────────────────────────┘
```

## 2. Dashboard (role-specific)

```
 ┌───────────┬─────────────────────────────┐
 │  Sidebar  │  Topbar: Welcome, [User] ▾   │
 │           ├─────────────────────────────┤
 │ Dashboard │  [Patients] [Doctors] [Appts]│
 │ Patients  │   Card       Card     Card   │
 │ Doctors   │                              │
 │ Appts     │  Recent Activity / Chart     │
 │ Billing   │                              │
 │ Reports   │                              │
 │ Profile   │                              │
 └───────────┴─────────────────────────────┘
```

## 3. List Page (e.g. Patients)

```
 ┌───────────────────────────────────────────┐
 │ Patients                    [+ Add Patient]│
 │ [ Search_______________ ]                  │
 ├───────────────────────────────────────────┤
 │ Name       Age   Contact      Actions      │
 │ John Doe   34    9xxxxxxxxx   [Edit][Del]  │
 │ Jane Roy   28    9xxxxxxxxx   [Edit][Del]  │
 └───────────────────────────────────────────┘
```

## 4. Add/Edit Form (e.g. Patient)

```
 ┌───────────────────────────────┐
 │  Add / Edit Patient            │
 │                                 │
 │  Name     [______________]    │
 │  Age      [______________]    │
 │  Gender   [______________]    │
 │  Contact  [______________]    │
 │  Address  [______________]    │
 │                                 │
 │        [ Cancel ] [ Save ]     │
 └───────────────────────────────┘
```

## 5. Profile Page

```
 ┌───────────────────────────────┐
 │      [ Avatar ]                │
 │      Name                      │
 │      Role                      │
 ├───────────────────────────────┤
 │  Email     [______________]   │
 │  Contact   [______________]   │
 │                                 │
 │           [ Save Changes ]     │
 └───────────────────────────────┘
```