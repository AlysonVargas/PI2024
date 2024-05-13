import cv2
import easyocr

# Carregar o modelo EasyOCR
reader = easyocr.Reader(['pt'], gpu=False)

# Captura de vídeo da webcam
cap = cv2.VideoCapture(0)

lista_placas = ["DOK2A20"]

while True:
    # Ler o frame da câmera
    ret, frame = cap.read()

    if not ret:
        break

    # Detectar texto no frame
    text_results = reader.readtext(frame)

    threshold = 0.25

    # Desenhar caixas delimitadoras e textos detectados
    for text_result in text_results:
        bbox, text, score = text_result

        if text in lista_placas:
            cor = (0, 255, 0)  
        else:
            cor = (0, 0, 255)  

        if score > threshold:
            # Desenhar a caixa delimitadora
            cv2.rectangle(frame, bbox[0], bbox[2], (0, 255, 0), 2)
            
            # Adicionar o texto detectado
            cv2.putText(frame, text, (bbox[0][0], bbox[0][1] - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.8, cor, 2)

    # Exibir o frame resultante
    cv2.imshow('Text Detection', frame)



cap.release()
cv2.destroyAllWindows()
