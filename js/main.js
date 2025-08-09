
        document.addEventListener("DOMContentLoaded", function () {
            document.querySelector("#contact_form").addEventListener("submit", sendMsg);
        });

        function sendMsg(e) {
            e.preventDefault();

            const name = document.querySelector(".name").value.trim();
            const address = document.querySelector(".address").value.trim();
            const email = document.querySelector(".email").value.trim();
            const msg = document.querySelector(".message").value.trim();

            if (!name || !address || !email || !msg) {
                alert("من فضلك، قم بتعبئة جميع الحقول.");
                return;
            }

            Email.send({
                SecureToken: "df72f18a-1127-40c7-bf05-7b5cf6d9464a ",
                To: 'norhannabil76@gmail.com',
                From: "norhannabil76@gmail.com",
                Subject: `رسالة جديدة من ${name}`,
                Body: `
        <h3>تفاصيل الرسالة</h3>
        <p><strong>الاسم:</strong> ${name}</p>
        <p><strong>البريد الإلكتروني:</strong> ${email}</p>
        <p><strong>العنوان:</strong> ${address}</p>
        <p><strong>الرسالة:</strong><br>${msg}</p>
      `
            }).then(
                message => {
                    alert("تم إرسال الرسالة بنجاح ✅");
                }
            ).catch(
                error => {
                    alert("حدث خطأ أثناء الإرسال ❌: " + error);
                    console.error(error);
                }
            );
        }
