import os
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable, ListFlowable, ListItem
)
from reportlab.lib.colors import black, HexColor
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT, TA_JUSTIFY

def generate_resume(output_path):
    doc = SimpleDocTemplate(
        output_path,
        pagesize=letter,
        leftMargin=36,
        rightMargin=36,
        topMargin=32,
        bottomMargin=32
    )

    styles = getSampleStyleSheet()
    
    # Custom styles
    name_style = ParagraphStyle(
        'ResumeName',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=18,
        leading=22,
        alignment=TA_CENTER,
        textColor=black
    )
    
    contact_style = ParagraphStyle(
        'ResumeContact',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=13,
        alignment=TA_CENTER,
        textColor=HexColor('#1f2937')
    )

    link_style = ParagraphStyle(
        'ResumeLinks',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=13,
        alignment=TA_CENTER,
        textColor=HexColor('#0284c7')
    )

    section_heading = ParagraphStyle(
        'SectionHeading',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=11,
        leading=14,
        textColor=black,
        spaceBefore=0,
        spaceAfter=0
    )

    body_style = ParagraphStyle(
        'BodyText',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11.5,
        textColor=HexColor('#1f2937'),
        alignment=TA_LEFT
    )

    item_title_style = ParagraphStyle(
        'ItemTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9,
        leading=12,
        textColor=black
    )

    item_date_style = ParagraphStyle(
        'ItemDate',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=12,
        alignment=TA_RIGHT,
        textColor=black
    )

    bullet_style = ParagraphStyle(
        'BulletText',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11.5,
        textColor=HexColor('#1f2937'),
        leftIndent=14,
        firstLineIndent=-10,
        spaceAfter=2
    )

    story = []

    # 1. Header
    story.append(Paragraph("<b>Siddhartha Gudiwada</b>", name_style))
    story.append(Spacer(1, 3))
    story.append(Paragraph("siddhardhagudiwada133@gmail.com — +91 9392137214 — NTR, AP, India - 521227", contact_style))
    story.append(Spacer(1, 2))
    story.append(Paragraph('<a href="https://www.linkedin.com/in/siddhartha-gudiwada-9b3584254" color="#0284c7"><u>Linked in</u></a> - <a href="https://siddhardha-14.github.io/siddhartha_portfolio/" color="#0284c7"><u>portfolio</u></a>', link_style))
    story.append(Spacer(1, 10))

    # Helper for Section Title + Line
    def add_section(title):
        story.append(Paragraph(title, section_heading))
        story.append(Spacer(1, 2))
        story.append(HRFlowable(width="100%", thickness=0.75, color=black, spaceBefore=1, spaceAfter=5))

    # 2. Objective
    add_section("Objective")
    story.append(Paragraph(
        "UI/UX Designer with experience in Figma, wireframing, prototyping, and responsive front-end UI design for both web and mobile. Proficient in making user flows, design systems, and interactive prototypes, and also developer handoffs. Have a good grasp of usability, some basics of accessibility, and user-centered design.",
        body_style
    ))
    story.append(Spacer(1, 8))

    # 3. Education
    add_section("Education")
    edu_table_data = [
        [
            Paragraph("<b>Bachelor of Engineering in Electronics and Communication Engineering</b>", item_title_style),
            Paragraph("2022 – 2026", item_date_style)
        ]
    ]
    t = Table(edu_table_data, colWidths=[400, 140])
    t.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t)
    story.append(Spacer(1, 1))
    story.append(Paragraph("Kalasalingam Academy of Research and Education, Tamil Nadu", body_style))
    story.append(Spacer(1, 1))
    story.append(Paragraph("CGPA: 7.25/10", body_style))
    story.append(Spacer(1, 8))

    # 4. Technical Skills
    add_section("Technical Skills")
    skills = [
        ("UI/UX & Process:", "UI Design, UX Design, Wireframing, Prototyping, User Flows, Usability Testing, Accessibility (WCAG basics), Design Handoff, User Research"),
        ("Design Tools:", "Figma, Framer, Auto Layout (Figma), Interactive Prototyping, Design Systems, Component Library."),
        ("AI-Assisted Development (Vibe Coding):", "LLM’s, GitHub ,Antigravity, Cursor, AI-assisted debugging, rapid prototyping workflows."),
        ("Platforms:", "Responsive Web Design, Web UI Design, Mobile App UI"),
        ("Other Tools:", "SQL, Power BI, VS Code")
    ]
    for label, desc in skills:
        story.append(Paragraph(f"• <b>{label}</b> {desc}", bullet_style))
    story.append(Spacer(1, 6))

    # 5. Experience
    add_section("Experience")
    story.append(Paragraph("<b>UI Designer Intern - Infotact Solutions (PeoplePulse HRMS)</b>", item_title_style))
    story.append(Spacer(1, 3))
    exp_bullets = [
        "Designed responsive web UI layout for authentication screens like login, signup, and forgot password, and user profile pages using Figma as part of a 15+ screen HRMS project.",
        "Collaborated with the product team for UI flow development for the HR and Employee portal(attendance tracking, leave application/approval, attendance percentage, status views).",
        "Designed wireframes, high-fidelity UI, and associated interactive prototypes, as well as assisted design handoffs with developers and usability and accessibility principles for navigation."
    ]
    for b in exp_bullets:
        story.append(Paragraph(f"• {b}", bullet_style))
    story.append(Spacer(1, 6))

    # 6. Projects
    add_section("Projects")
    story.append(Paragraph("<b>Smart Farmer Support App – Smart Agri Hub (Figma)</b>", item_title_style))
    story.append(Spacer(1, 2))
    p1_bullets = [
        "Developed mobile app UI using Figma, where user flow, wireframes, and high-fidelity designs were created.",
        "user testing to improve the accessibility and layout of the page.",
        "<b>Tools:</b> Figma, Wireframing, Prototyping, User Research, Usability Testing, Design."
    ]
    for b in p1_bullets:
        story.append(Paragraph(f"• {b}", bullet_style))
    story.append(Spacer(1, 4))

    story.append(Paragraph("<b>Smartwatch Bus Booking Interface (UI/UX Design)</b>", item_title_style))
    story.append(Spacer(1, 2))
    p2_bullets = [
        "Designed wearable UI for Bus Booking system using Figma, which is thumb-friendly with a glanceable design.",
        "Developed wireframes, prototypes, and reusable UI components with Auto Layout and Smart Animate technologies, adhering to Wear OS specifications.",
        "<b>Tools:</b> Figma, Wireframing, Prototyping, Component Library, Responsive"
    ]
    for b in p2_bullets:
        story.append(Paragraph(f"• {b}", bullet_style))
    story.append(Spacer(1, 6))

    # 7. Certifications
    add_section("Certifications")
    story.append(Paragraph("• Soft Skills Certification 2023 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; • UI/UX Design — Great Learning July 2024", body_style))

    doc.build(story)
    print(f"Successfully generated {output_path}")

if __name__ == '__main__':
    base_dir = os.path.dirname(os.path.abspath(__file__))
    assets_dir = os.path.join(base_dir, 'assets')
    os.makedirs(assets_dir, exist_ok=True)
    
    target_pdf = os.path.join(assets_dir, 'Siddhartha_Gudiwada_Resume.pdf')
    root_pdf = os.path.join(base_dir, 'resume.pdf')
    
    # Protected: User has provided their authentic official PDF.
    # To regenerate template PDF, set OVERWRITE_OFFICIAL=1
    if os.environ.get('OVERWRITE_OFFICIAL') == '1':
        generate_resume(target_pdf)
        generate_resume(root_pdf)
    else:
        print("Authentic official PDF preserved. Set OVERWRITE_OFFICIAL=1 to rebuild.")
