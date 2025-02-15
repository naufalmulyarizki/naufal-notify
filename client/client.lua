RegisterNetEvent("custom_notify:send")
AddEventHandler("custom_notify:send", function(message, type, icon, duration, position, sound)
    SendNUIMessage({
        action = "showNotification",
        message = message,
        type = type or "info",
        icon = icon or "default",
        duration = duration or 5000,
        position = position or "top-right", -- Posisi default
        suara = sound or 'info'
    })
end)

-- Contoh: Mengirim notifikasi ke berbagai posisi
TriggerEvent("custom_notify:send", "Notifikasi di kanan atas!", "info", "ℹ️", 5000, "top-right", "info")
TriggerEvent("custom_notify:send", "Notifikasi di kiri bawah!", "success", "✅", 5000, "bottom-left", "info")
TriggerEvent("custom_notify:send", "Notifikasi di tengah bawah!", "warning", "⚠️", 5000, "bottom-center", "info")