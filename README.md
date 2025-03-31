# Wallet Monitor

Wallet Monitor to mobilna aplikacja React Native do zarządzania finansami osobistymi. Umożliwia użytkownikowi śledzenie przychodów i wydatków, filtrowanie transakcji oraz obliczanie aktualnego salda.

## 📌 Funkcje

- 📋 **Lista transakcji** – przeglądaj wszystkie swoje przychody i wydatki.
- ➕ **Dodawanie transakcji** – szybko dodawaj nowe transakcje z kategoriami i datami.
- 🔍 **Filtrowanie transakcji** – sortuj według kategorii, kwoty i daty.
- 🗑 **Usuwanie transakcji** – usuń dowolną transakcję jednym kliknięciem.
- 💰 **Obliczanie salda** – automatyczne podsumowanie dostępnych środków.

## 🛠 Technologie

- React Native
- TypeScript
- react-native-vector-icons
- Komponenty własne: `AddTransactionModal`, `FilterModal`
- Style w oddzielnych plikach: `layoutStyles`, `typographyStyles`, `transactionStyles`, `buttonStyles`

## 📥 Instalacja

Aby uruchomić projekt lokalnie, wykonaj następujące kroki:

```sh
# Klonowanie repozytorium
git clone https://github.com/your-repo/wallet-monitor.git
cd wallet-monitor

# Instalacja zależności
npm install

# Uruchomienie aplikacji w emulatorze lub na urządzeniu
npx react-native run-android  # dla Androida
npx react-native run-ios      # dla iOS
```
