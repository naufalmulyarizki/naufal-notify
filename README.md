![preview1](https://r2.fivemanage.com/WX5Hv6yMgODTgG2WF6rml/images/backgroundgithub.png)

# Naufal Notify

Notify Server (STANDALONE)

# Features 
- Notif Sukses
- Notif Warning
- Notif Gagal
- Posisi Notify
- Durasi Notify
- Bunyi Notify

# Installation
- Brain

## Event

```lua
-- Code
-- message : Pesan yang ingin dikirimkan ke notifikasi
-- type : Tipe yang ingin dikirimkan sesuai saat melakukan sesuatu
-- Tipenya ada = 
-- - Info
-- - Success
-- - Error
-- - Warning
-- - Bell
-- - Default

-- Icon : Gunakan icon emoji yang ada di google

-- Duration : Waktu Notifikasi Muncul

-- Posisi : Posisi Notifikasi sesuai yang kamu inginkan
-- Posisi Ada = 
-- - top-right
-- - top-left
-- - bottom-right
-- - bottom-left
-- - bottom-center
-- - top-center

-- Sound : Nama sound yang kamu mau sesuai kondisi notif kamu (Pastikan sound tersebut sudah terdaftar di html/sounds dengan format mp3)

TriggerEvent("custom_notify:send", message, type, icon, duration, position, sounds)

-- Contoh: Mengirim notifikasi ke berbagai posisi
TriggerEvent("custom_notify:send", "Notifikasi di kanan atas!", "info", "ℹ️", 5000, "top-right", "bell")
TriggerEvent("custom_notify:send", "Notifikasi di kiri bawah!", "success", "✅", 5000, "bottom-left", "bell")
TriggerEvent("custom_notify:send", "Notifikasi di tengah bawah!", "warning", "⚠️", 5000, "bottom-center", "bell")
```

## Previews Info Notify

![previewinfonotify](https://r2.fivemanage.com/WX5Hv6yMgODTgG2WF6rml/images/previewinfonotify.png)

## Previews Error Notify
![previewerrornotify](https://r2.fivemanage.com/WX5Hv6yMgODTgG2WF6rml/images/previewerrornotify.png)

## Previews Success Notify
![previewsuccessnotify](https://r2.fivemanage.com/WX5Hv6yMgODTgG2WF6rml/images/previewsuccessnotify.png)

# Dependencies

- Brain / Otak

# Github Star History

[![Star History Chart](https://api.star-history.com/svg?repos=naufalmulyarizki/naufal-notify&type=Date)](https://star-history.com/#naufalmulyarizki/naufal-notify&Date)